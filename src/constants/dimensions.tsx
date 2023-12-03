import {Dimensions, StatusBar} from 'react-native';

export const dimension = (dim: 'window' | 'screen' = 'window') => ({
  width: Dimensions.get(dim).width,
  height: Dimensions.get(dim).height,
});

export const headerHeight = 44;
export const statusBarHeight = StatusBar.currentHeight ?? 0;
