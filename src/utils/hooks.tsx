import {Platform} from 'react-native';
import {Easing} from 'react-native-reanimated';
import i18n from './i18n';

// Type
import {AnimationConfig, BackgroundColorConfig} from './types';
import {GeneralError} from '@src/hooks/types';

// Construct the animation configuration
export const getAnimationConfig = ({config, toValue}: AnimationConfig) => ({
  toValue,
  duration: Platform.OS === 'android' ? 280 : 600,
  easing: Easing.out(Easing.exp),
  ...config?.userConfig,
});

// Get error message from various error types, including customized translation handling.
export const getErrorMessage = (error: GeneralError): string => {
  if ('status' in error && typeof error.status === 'number') {
    const errorData = error.data as {message: string; status: number};
    return errorData?.message || i18n.t('response:UNKNOWN_ERROR');
  } else if ('status' in error && typeof error.status === 'string') {
    return i18n.t(`response:${error.status}`);
  }
  return error.message || i18n.t('response:UNKNOWN_ERROR');
};

// Determines the appropriate background color for an alert.
export const getAlertBackgroundColor = ({
  backgroundColor,
  type,
  theme,
}: BackgroundColorConfig) => {
  if (backgroundColor) {
    return backgroundColor;
  }

  switch (type) {
    case 'ALERT':
      return theme.danger.main;
    case 'SUCCESS':
      return theme.success.main;
    case 'WARNING':
      return theme.tertiary.main;
    default:
      return theme.tertiary.main;
  }
};
