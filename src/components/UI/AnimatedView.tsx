import React from 'react';
import Animated from 'react-native-reanimated';

// Type
import {CustomAnimatedViewProps} from '@src/components/UI/types';

const AnimatedView = (props: CustomAnimatedViewProps) => {
  const style = props?.style;

  return (
    <Animated.View {...props} style={style}>
      {props.children}
    </Animated.View>
  );
};

export default AnimatedView;
