// VIBRATION SETTING
export const hapticFeedbackOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

// NUMBERS
export const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  twentyOne: 21,
  twentyTwo: 22,
  twentyThree: 23,
  twentyFour: 24,
  twentyFive: 25,
  twentySix: 26,
  twentySeven: 27,
  twentyEight: 28,
};

// FONT FAMILY
export const fontFamily = {
  montserrat: {
    100: 'Montserrat-Thin',
    200: 'Montserrat-ExtraLight',
    300: 'Montserrat-Light',
    400: 'Montserrat-Regular',
    500: 'Montserrat-Medium',
    600: 'Montserrat-SemiBold',
    700: 'Montserrat-Bold',
    800: 'Montserrat-ExtraBold',
  },
};

// RULES
export const emailRegex = new RegExp(
  '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+' +
    '[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[' +
    '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}' +
    '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:' +
    '(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])',
  'i',
);

export const transparent = 'transparent';
