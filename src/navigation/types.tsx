import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// NAVIGATION
export type RootStack = {
  MainNavigator: NavigatorScreenParams<MainStack>;
};

export type MainStack = {
  MainHomeScreen: undefined;
};

export type SplashStack = {
  SplashScreen: undefined;
};

export type MainStackScreenProps<
  T extends keyof RootStack,
  E extends keyof MainStack,
> = CompositeScreenProps<
  NativeStackScreenProps<MainStack, E>,
  NativeStackScreenProps<RootStack, T>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}

export type RootStackScreenProps<T extends keyof RootStack> =
  NativeStackScreenProps<RootStack, T>;
