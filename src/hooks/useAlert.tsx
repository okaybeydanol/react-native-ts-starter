import React, {useCallback, useEffect, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

// Utils
import {getAlertBackgroundColor} from '@src/utils/hooks';

// Component
import AnimatedView from '@src/components/UI/AnimatedView';
import Text from '@src/components/UI/Text';

// Type
import {AlertHookConfig, AlertHookResult, DefaultAlertSettings} from './types';

// Constant
import {dimension} from '@src/constants/dimensions';

// Default settings defined outside the hook
const defaultSettings = {
  isDisplayed: false,
  text: 'Error',
  backgroundColor: '', // This will be set within the hook after theme is obtained
  textColor: '#FFF',
  duration: 500,
  delay: 1000,
};

const useAlert = (): AlertHookResult => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [alertSettings, setAlertSettings] = useState<DefaultAlertSettings>({
    ...defaultSettings,
    backgroundColor: getAlertBackgroundColor({theme}),
  });

  const alertHeight =
    Platform.OS === 'ios'
      ? alertSettings?.alertHeight?.ios ?? insets.top + 10
      : alertSettings?.alertHeight?.android ?? 30;

  const alertTranslateY = useSharedValue(-alertHeight);
  const animatedAlertStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: alertTranslateY.value}],
    };
  });

  // Takes new alert settings and updates the settings to show the alert.
  const displayAlert = useCallback(
    (newSettings: AlertHookConfig) => {
      setAlertSettings(prevSettings => ({
        ...prevSettings,
        ...newSettings,
        isDisplayed: true,
        backgroundColor: getAlertBackgroundColor({
          backgroundColor: newSettings.backgroundColor,
          type: newSettings.type,
          theme,
        }),
      }));
    },
    [theme],
  );

  // A function used to hide the visibility of the alert
  const hideAlert = useCallback(() => {
    if (alertSettings.isDisplayed) {
      setAlertSettings(prevSettings => ({...prevSettings, isDisplayed: false}));
    }
  }, [alertSettings.isDisplayed]);

  useEffect(() => {
    if (alertSettings.isDisplayed) {
      alertTranslateY.value = withSequence(
        withTiming(0, {duration: alertSettings.duration}),
        withDelay(
          alertSettings.delay ?? defaultSettings.delay,
          withTiming(-alertHeight, {duration: alertSettings.duration}, () =>
            runOnJS(hideAlert)(),
          ),
        ),
      );
    }
  }, [
    alertHeight,
    hideAlert,
    alertSettings.delay,
    alertSettings.duration,
    alertSettings.isDisplayed,
    alertTranslateY,
  ]);

  // Renders the UI (User Interface) part of the alert component.
  // Shows or hides the alert based on its visibility state.
  const renderAlert = () => (
    <>
      {alertSettings.isDisplayed && (
        <AnimatedView
          style={[
            styles.container,
            {
              height: alertHeight,
              backgroundColor: alertSettings.backgroundColor,
            },
            animatedAlertStyle,
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: alertSettings.textColor,
              },
            ]}>
            {alertSettings.text}
          </Text>
        </AnimatedView>
      )}
    </>
  );

  return {
    renderAlert,
    displayAlert,
  };
};

export default useAlert;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: dimension().width,
    justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center',
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    alignItems: 'center',
    elevation: 1,
    zIndex: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});
