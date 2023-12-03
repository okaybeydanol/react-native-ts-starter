import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {SplashStack} from './types';

// Screen
import SplashScreen from '@src/screens/SplashScreen';
import {useColorScheme} from 'react-native';

const Splash = createNativeStackNavigator<SplashStack>();

export const SplashNavigator = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  return (
    <Splash.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarColor: 'transparent',
        statusBarStyle: isDark ? 'light' : 'dark',
        navigationBarColor: isDark ? 'black' : 'white',
      }}>
      <Splash.Screen name="SplashScreen" component={SplashScreen} />
    </Splash.Navigator>
  );
};
