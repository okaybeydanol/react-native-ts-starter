import React from 'react';
import {StyleProp, View as RNView, ViewProps} from 'react-native';

// Type
import {CustomViewProps} from './types';

const View = (props: CustomViewProps) => {
  const style = props?.style as StyleProp<ViewProps>;

  return (
    <RNView {...props} style={style}>
      {props.children}
    </RNView>
  );
};

export default View;
