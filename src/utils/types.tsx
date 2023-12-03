import {HapticFeedbackTypes} from 'react-native-haptic-feedback';
import {ViewStyle, StyleProp} from 'react-native';
import {SvgProps} from 'react-native-svg';

// Type
import {DefaultAlertType, KeyboardAnimationConfig} from '@src/hooks/types';
import {MyTheme} from '@src/constants/types';
import {IconOptions} from '@src/components/UI/types';

export type HapticFeedbackParams = {
  ios?: HapticFeedbackTypes;
  android?: HapticFeedbackTypes;
};

// SvgHelper
export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}

// Keyboard
export interface AnimationConfig {
  config?: KeyboardAnimationConfig;
  toValue: number;
}

// Alert
export interface BackgroundColorConfig {
  backgroundColor?: string;
  type?: DefaultAlertType[keyof DefaultAlertType];
  theme: MyTheme;
}

// Header
export interface CalculateIconOptionsConfig {
  options?: IconOptions;
  defaultColor?: string;
}
