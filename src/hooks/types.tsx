import {TextInput, TextInputProps, ViewProps} from 'react-native';
import {
  AnimatedProps,
  AnimationCallback,
  WithTimingConfig,
} from 'react-native-reanimated';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

// TextInput
export interface TextInputHookConfig {
  initial?: string;
  validate?: (value: string) => boolean;
}
export interface TextInputHookResult {
  value: string;
  hasError: boolean;
  isTouched: boolean;
  valueChangeHandler: (newValue: string) => void;
  inputBlurHandler: () => void;
  inputFocusHandler: () => void;
  textInputRender: (
    props?: TextInputProps & {
      clear?: boolean;
    },
  ) => React.JSX.Element;
  reset: () => void;
  ref: React.MutableRefObject<TextInput | null>;
}

// useKeyboard
export interface KeyboardAnimationConfig {
  toValue: number;
  userConfig?: WithTimingConfig;
  callback?: AnimationCallback;
}
export interface KeyboardHookConfig {
  keyboardShow?: KeyboardAnimationConfig;
  keyboardHide?: KeyboardAnimationConfig;
  animated?: boolean;
}
export interface KeyboardInfo {
  height: number;
  isOpen: boolean;
}
export interface HandleKeyboardProps extends KeyboardInfo {
  config?: KeyboardAnimationConfig;
}
export interface KeyboardHookResult {
  keyboardHeight: number;
  isKeyboardOpen: boolean;
  renderAnimatedView: (props?: AnimatedProps<ViewProps>) => React.JSX.Element;
}

// useAlert
export interface AlertHookConfig {
  isDisplayed?: boolean;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
  delay?: number;
  type?: DefaultAlertType[keyof DefaultAlertType];
  alertHeight?: {
    android: number;
    ios: number;
  };
}
export interface DefaultAlertSettings {
  isDisplayed: boolean;
  text: string;
  backgroundColor: string;
  textColor: string;
  duration: number;
  delay: number;
  type?: DefaultAlertType[keyof DefaultAlertType];
  alertHeight?: {
    android: number;
    ios: number;
  };
}
export interface AlertHookResult {
  renderAlert: () => JSX.Element;
  displayAlert: (newState: AlertHookConfig) => void;
}
export interface DefaultAlertType {
  ALERT: 'ALERT';
  SUCCESS: 'SUCCESS';
  WARNING: 'WARNING';
}

// useResponse
export interface GeneralError {
  status?:
    | number
    | 'CUSTOM_ERROR'
    | 'FETCH_ERROR'
    | 'PARSING_ERROR'
    | 'TIMEOUT_ERROR';
  data?: unknown;
  error?: string;
  name?: string;
  message?: string;
}
export interface ResponseHookConfig<T> {
  onSuccess?: ({res}: {res: T}) => void;
  onError?: ({err}: {err: GeneralError}) => void;
}
export interface HandleResponse<T> {
  data?: T;
  error?: FetchBaseQueryError | SerializedError;
}
export interface ResponseHookResult<T> {
  handleResponse: (response: HandleResponse<T>) => void;
}
