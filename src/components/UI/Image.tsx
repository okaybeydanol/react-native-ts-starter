import React from 'react';
import {Image as RNImage} from 'react-native';

// Type
import {CustomImageProps} from '@src/components/UI/types';

const Image = (props: CustomImageProps) => {
  const {placeholderSource} = props;

  return (
    <RNImage
      defaultSource={placeholderSource}
      resizeMode="stretch"
      {...props}
    />
  );
};

export default Image;
