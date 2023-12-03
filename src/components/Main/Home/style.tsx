import {StyleSheet} from 'react-native';

// Type
import {MyTheme} from '@src/constants/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    text: {
      color: theme.secondary,
    },
  });
export default getStyles;
