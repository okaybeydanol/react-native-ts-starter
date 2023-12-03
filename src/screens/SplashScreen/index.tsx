import React from 'react';
import {useTheme} from '@react-navigation/native';

// Slice
import {useAppDispatch} from '@src/store';
import {setRoute} from '@src/store/slices/route';

// Component
import View from '@src/components/UI/View';
import Text from '@src/components/UI/Text';

// Style
import getStyles from '@src/screens/SplashScreen/style';

const SplashScreen = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTimeout(() => dispatch(setRoute({path: 'MainNavigator'})), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.starter}>Starter</Text>
    </View>
  );
};

export default SplashScreen;
