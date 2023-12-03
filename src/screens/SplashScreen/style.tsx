import {StyleSheet} from 'react-native';

// Constant
import {fontFamily} from '@src/constants';

// Type
import {MyTheme} from '@src/constants/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    starter: {
      fontSize: 32,
      fontFamily: fontFamily.montserrat['700'],
      letterSpacing: 3,
      color: theme.secondary,
    },
  });
export default getStyles;
