import React from 'react';

// Component
import MainHome from '@src/components/Main/Home';

// Hook
import useAlert from '@src/hooks/useAlert';

// Types
import {MainStackScreenProps} from '@src/navigation/types';

const MainHomeScreen = ({
  route,
  navigation,
}: MainStackScreenProps<'MainNavigator', 'MainHomeScreen'>) => {
  const alert = useAlert();

  return (
    <>
      {alert.renderAlert()}
      <MainHome route={route} navigation={navigation} alert={alert} />
    </>
  );
};

export default MainHomeScreen;
