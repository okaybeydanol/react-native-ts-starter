import React from 'react';
import {useTheme} from '@react-navigation/native';

// Component
import SafeAreaView from '@src/components/UI/SafeAreaView';
import Text from '@src/components/UI/Text';
import Image from '@src/components/UI/Image';

// Api
import {useLazyGetByIdQuery} from '@src/store/api';

// Hook
import useResponse from '@src/hooks/useResponse';

// Type
import {MainStackScreenProps} from '@src/navigation/types';
import {ProductApiResponse} from '@src/store/api/types';
import {AlertHookResult} from '@src/hooks/types';

// Style
import getStyles from './style';

const MainHome = ({
  alert,
}: MainStackScreenProps<'MainNavigator', 'MainHomeScreen'> & {
  alert: AlertHookResult;
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  const response = useResponse<ProductApiResponse>({
    onSuccess: ({res}) => {
      alert.displayAlert({
        text: res.description,
        type: 'SUCCESS',
      });
    },
    onError: ({err}) => {
      alert.displayAlert({
        text: err.message,
        type: 'ALERT',
      });
    },
  });
  const [trigger, {data}] = useLazyGetByIdQuery();

  React.useEffect(() => {
    trigger({id: '1'}).then(res => response.handleResponse(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{data?.title}</Text>
      <Text style={styles.text}>{data?.description}</Text>
      <Image source={{uri: data?.images[2]}} width={100} height={100} />
    </SafeAreaView>
  );
};

export default MainHome;
