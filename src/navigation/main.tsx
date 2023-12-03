import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {MainStack} from './types';

// Screen
import MainHomeScreen from '@src/screens/MainScreen/HomeScreen';

const Main = createNativeStackNavigator<MainStack>();

export const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Main.Screen name="MainHomeScreen" component={MainHomeScreen} />
    </Main.Navigator>
  );
};
