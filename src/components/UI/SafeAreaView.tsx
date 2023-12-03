import React from 'react';
import {StyleProp, ViewProps} from 'react-native';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

// Type
import {CustomSafeAreaViewProps} from './types';

const SafeAreaView = (props: CustomSafeAreaViewProps) => {
  const style = props?.style as StyleProp<ViewProps>;

  return (
    <RNSafeAreaView {...props} style={style}>
      {props.children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
