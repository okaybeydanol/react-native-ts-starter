import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

// Type
import {CustomTextProps} from '@src/components/UI/types';

const Text = (props: CustomTextProps) => {
  return (
    <RNText {...props} style={[styles.default, props.style]}>
      {props.children || props.text}
    </RNText>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: '#000000',
  },
});

export default Text;
