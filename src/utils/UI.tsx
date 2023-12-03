// Constant
import {numbers} from '@src/constants';

// Type
import {DefaultIconOptionsActive, IconOptions} from '@src/components/UI/types';
import {CalculateIconOptionsConfig} from './types';

// Header
export const isDefaultIconOptionsActive = (
  options: IconOptions,
): options is DefaultIconOptionsActive => {
  return (
    (options.shown === true && !('icon' in options)) ||
    options.shown === undefined
  );
};

export const getIconStyles = ({
  options,
  defaultColor = 'gray',
}: CalculateIconOptionsConfig) => {
  let stroke = defaultColor;
  let fill = defaultColor;
  let strokeWidth = 0;

  if (options && isDefaultIconOptionsActive(options)) {
    strokeWidth = options?.presentation === 'close' ? 2 : 0;

    stroke = options.strokeOptions?.color ?? defaultColor;
    fill = options.fillOptions?.color ?? defaultColor;
    strokeWidth = options.strokeOptions?.width ?? strokeWidth;
  }

  return {stroke, strokeWidth, fill};
};

export const getIconSize = (options?: IconOptions) => {
  if (options && isDefaultIconOptionsActive(options)) {
    const width = options.width ?? numbers.sixteen;
    const height = options.height ?? numbers.sixteen;

    return {width, height};
  }
  return {width: numbers.nine, height: numbers.sixteen};
};
