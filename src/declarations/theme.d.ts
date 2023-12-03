import '@react-navigation/native';

// Type
import {MyTheme} from '../constants/types';

declare module '@react-navigation/native' {
  export function useTheme(): MyTheme;
}
