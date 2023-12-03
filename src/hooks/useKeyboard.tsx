import React, {useEffect, useState} from 'react';
import {Keyboard, Platform, StyleSheet, ViewProps} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  AnimatedProps,
} from 'react-native-reanimated';

// Component
import AnimatedView from '@src/components/UI/AnimatedView';

// Type
import {
  HandleKeyboardProps,
  KeyboardHookConfig,
  KeyboardInfo,
  KeyboardHookResult,
} from '@src/hooks/types';

// Utils
import {getAnimationConfig} from '@src/utils/hooks';

const useKeyboard = ({
  keyboardShow,
  keyboardHide,
  animated = false,
}: KeyboardHookConfig = {}): KeyboardHookResult => {
  const [keyboardInfo, setKeyboardInfo] = useState<KeyboardInfo>({
    height: 0,
    isOpen: false,
  });
  const translationY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translationY.value}],
  }));

  // Handle the keyboard appearance and disappearance
  const handleKeyboard = ({config, isOpen, height}: HandleKeyboardProps) => {
    const defaultTranslation = isOpen ? -height : 0;
    const finalTranslation =
      config?.toValue !== undefined
        ? defaultTranslation + config.toValue
        : defaultTranslation;

    if (translationY.value === finalTranslation) {
      return;
    }
    setKeyboardInfo({height, isOpen});

    const animationConfig = getAnimationConfig({
      config,
      toValue: finalTranslation,
    });

    translationY.value = animated
      ? withTiming(animationConfig.toValue, animationConfig, finished => {
          config?.callback && runOnJS(config.callback)(finished);
        })
      : finalTranslation;
  };

  // Set up keyboard event listeners
  useEffect(() => {
    const showEvent =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideEvent =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

    const showSubscription = Keyboard.addListener(showEvent, event =>
      handleKeyboard({
        config: keyboardShow,
        isOpen: true,
        height: event.endCoordinates.height,
      }),
    );
    const hideSubscription = Keyboard.addListener(hideEvent, () =>
      handleKeyboard({
        config: keyboardHide,
        isOpen: false,
        height: 0,
      }),
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the animated view
  const renderAnimatedView = (props?: AnimatedProps<ViewProps>) => {
    const style = StyleSheet.flatten(props?.style);
    return (
      <AnimatedView {...props} style={[style, animatedStyle]}>
        {props?.children}
      </AnimatedView>
    );
  };

  return {
    keyboardHeight: keyboardInfo.height,
    isKeyboardOpen: keyboardInfo.isOpen,
    renderAnimatedView,
  };
};

export default useKeyboard;
