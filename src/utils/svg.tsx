import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';

// Type
import {SvgHelperProps} from '@src/utils/types';

// UI
import Back from '@assets/svg/UI/Back.svg';
import Close from '@assets/svg/UI/Close.svg';
import Clear from '@assets/svg/UI/Clear.svg';

const UI: {[key: string]: React.FC<SvgProps>} = {
  back: Back,
  close: Close,
  clear: Clear,
};

const uiSvgHelper = ({code, style, props}: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in UI) {
    const FlagComponent = UI[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export {uiSvgHelper};
