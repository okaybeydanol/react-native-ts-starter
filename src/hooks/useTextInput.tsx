import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Utils
import {uiSvgHelper} from '@src/utils/svg';

// Component
import View from '@src/components/UI/View';

// Type
import {MyTheme} from '@src/constants/types';
import {TextInputHookConfig, TextInputHookResult} from '@src/hooks/types';

const useTextInput = ({
  initial = '',
  validate = () => true,
}: TextInputHookConfig): TextInputHookResult => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const ref = React.useRef<TextInput | null>(null);
  const [value, setValue] = useState<string>(initial);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const hasError = value.length > 0 && !validate(value);

  const valueChangeHandler = (newValue: string) => {
    setValue(newValue);
  };

  const inputBlurHandler = () => {
    setIsTouched(false);
  };

  const inputFocusHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(initial);
  };

  const textInputRender = (
    props?: TextInputProps & {
      clear?: boolean;
    },
  ) => {
    const clear = props?.clear || true;
    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            {borderColor: hasError ? theme.danger.main : theme.gray['400']},
          ]}
          {...props}
          selectTextOnFocus={false}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={value}
          onChangeText={valueChangeHandler}
          onBlur={inputBlurHandler}
          onFocus={inputFocusHandler}
          clearButtonMode="never"
          ref={ref}
          placeholderTextColor={theme.gray['400']}
        />
        {clear && isTouched && value.length > 0 && (
          <TouchableOpacity
            hitSlop={{left: 16, right: 16, top: 16, bottom: 16}}
            style={styles.clear}
            onPress={reset}>
            {uiSvgHelper({
              code: 'clear',
              props: {fill: theme.gray['300']},
            })}
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return {
    value,
    hasError,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    textInputRender,
    reset,
    ref,
  };
};

export default useTextInput;

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    textInput: {
      height: 52,
      borderWidth: 1,
      backgroundColor: theme.gray['50'],
      borderRadius: 8,
      paddingLeft: 16,
      paddingRight: 40,
      color: theme.secondary,
    },
    clear: {
      height: '100%',
      justifyContent: 'center',
      position: 'absolute',
      right: 16,
    },
  });
