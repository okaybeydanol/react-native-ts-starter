import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Utils
import {uiSvgHelper} from '@src/utils/svg';
import {getIconStyles, getIconSize} from '@src/utils/UI';

// Constant
import {headerHeight} from '@src/constants/dimensions';

// Type
import {HeaderProps} from '@src/components/UI/types';

const Header = ({
  leftOptions,
  rightOptions,
  style,
  textOptions,
}: HeaderProps) => {
  const navigation = useNavigation();

  const isLeftShown = leftOptions?.shown !== false;
  const isMiddleShown = textOptions?.shown ?? false;
  const isRightShown = rightOptions?.shown ?? false;

  // Default action for left icon
  const defaultLeftIconAction = () => navigation?.goBack();

  // Determine the action for the left icon
  const leftIconAction =
    leftOptions?.shown && leftOptions?.iconClick
      ? leftOptions.iconClick
      : defaultLeftIconAction;

  const rightIconAction = rightOptions?.iconClick;

  // Helper to render left icon
  const renderLeftIcon = () => {
    if (!isLeftShown) {
      return null;
    }

    const icon =
      (leftOptions?.shown && leftOptions?.icon) ||
      uiSvgHelper({
        code:
          leftOptions &&
          'presentation' in leftOptions &&
          leftOptions.presentation
            ? leftOptions.presentation
            : 'back',
        props: {
          ...getIconStyles({options: leftOptions}),
          ...getIconSize(leftOptions),
        },
      });

    return (
      <TouchableOpacity
        style={[styles.left, leftOptions?.shown && leftOptions?.style]}
        hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
        activeOpacity={0.7}
        onPress={leftIconAction}>
        {icon}
      </TouchableOpacity>
    );
  };

  // Helper to render middle text
  const renderMiddleText = () => {
    if (!isMiddleShown) {
      return null;
    }

    return (
      <View style={styles.middle}>
        {textOptions?.component ?? (
          <Text numberOfLines={1} style={textOptions?.style}>
            {textOptions?.title}
          </Text>
        )}
      </View>
    );
  };

  // Helper to render right icon
  const renderRightIcon = () => {
    if (!isRightShown) {
      return null;
    }

    return (
      <TouchableOpacity
        style={[styles.right, rightOptions?.style]}
        hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
        activeOpacity={0.7}
        onPress={rightIconAction}>
        {rightOptions?.icon}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, style]}>
      {renderLeftIcon()}
      {renderMiddleText()}
      {renderRightIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: headerHeight,
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    zIndex: 1,
    justifyContent: 'center',
  },
  right: {
    zIndex: 1,
    justifyContent: 'center',
  },
});

export default Header;
