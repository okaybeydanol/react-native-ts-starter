import {
  ActivityIndicatorProps,
  ImageProps,
  ImageURISource,
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {AnimatedProps} from 'react-native-reanimated';
import React from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

// Image
export interface CustomImageProps extends ImageProps {
  placeholderSource?: ImageURISource;
}

// View
export interface CustomViewProps extends ViewProps {}
export interface CustomAnimatedViewProps extends AnimatedProps<ViewProps> {}
export interface CustomSafeAreaViewProps extends SafeAreaViewProps {}

// Button
export interface CustomButtonProps extends TouchableOpacityProps {
  activityIndicatorProps?: ActivityIndicatorProps;
  textProps?: TextProps;
  title?: string;
  loading?: boolean;
}

// Text
export interface CustomTextProps extends TextProps {
  text?: string;
}

// Header
interface BaseIconOptions {
  style?: StyleProp<ViewStyle>;
  iconClick?: () => void;
}

export interface CustomIconOptions extends BaseIconOptions {
  icon: React.JSX.Element;
  shown: true;
}

export type DefaultIconOptionsActive = {
  icon?: undefined;
  shown?: true;
  strokeOptions?: {
    width?: number;
    color?: string;
  };
  fillOptions?: {
    color?: string;
  };
  width?: number;
  height?: number;
  presentation?: 'close' | 'back';
} & BaseIconOptions;

export type DefaultIconOptions =
  | DefaultIconOptionsActive
  | {
      shown: false;
    };

export type IconOptions = CustomIconOptions | DefaultIconOptions;

export type TextOptions = {
  shown?: boolean;
  title?: string;
  style?: StyleProp<TextStyle>;
  component?: React.ReactNode;
};

export interface HeaderProps {
  leftOptions?: IconOptions;
  rightOptions?: CustomIconOptions;
  style?: StyleProp<ViewStyle>;
  textOptions?: TextOptions;
}

// Loading
export interface LoadingProps {
  isLoading?: boolean;
  screen?: boolean;
}
