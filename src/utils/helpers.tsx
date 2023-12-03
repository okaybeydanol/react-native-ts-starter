import {
  NativeModules,
  Permission,
  PermissionsAndroid,
  PixelRatio,
  Platform,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Constant
import {hapticFeedbackOptions} from '../constants';
import {dimension} from '../constants/dimensions';

// Type
import {HapticFeedbackParams} from './types';

// VIBRATION
export const hapticFeedback = ({ios, android}: HapticFeedbackParams): void => {
  return Platform.OS === 'android'
    ? ReactNativeHapticFeedback.trigger(
        android ? android : 'effectClick',
        hapticFeedbackOptions,
      )
    : ReactNativeHapticFeedback.trigger(
        ios ? ios : 'impactHeavy',
        hapticFeedbackOptions,
      );
};

const pixelDensity: number = PixelRatio.get();

// RECALCULATES THE ENTERED NUMBER ACCORDING TO THE SCREEN INCHES
export const toScale = (number: number): number => {
  const ratio = (metricsNumber() + pixelDensity) / 10;
  const value = number * Number(ratio.toFixed(1));
  return Number(value.toFixed(1));
};
const metricsNumber = (): number => {
  const density = pixelDensity * 160;
  const x = Math.pow((dimension().width * pixelDensity) / density, 2);
  const y = Math.pow((dimension().height * pixelDensity) / density, 2);
  return Math.sqrt(x + y) + 1.6;
};

// IT HELPS TO FIND THE NATIVE LANGUAGE OF THE PHONE.
export function getSystemLocale(): string {
  let locale: string = '';
  // iOS
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    // Android
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    return 'tr-TR';
  }

  return locale;
}

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(() => resolve({}), timeout));
};

// REMOVES SPACES IN STRING
export const stringSpaceRemove = (value: string) => {
  return value.replace(/\s/g, '');
};

// ANDROID PERMISSION
export const requestAndroidPermission = async (
  permission: Permission,
): Promise<boolean | undefined> => {
  try {
    const granted = await PermissionsAndroid.request(permission);
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    throw new Error('something went wrong');
  }
};

// SLUGIFY
export const slugify = (text: string) => {
  let trMap: {[key: string]: string} = {
    '\u00E7': 'c', // ç
    '\u00C7': 'c', // Ç
    '\u011F': 'g', // ğ
    '\u011E': 'g', // Ğ
    '\u015F': 's', // ş
    '\u015E': 's', // Ş
    '\u00FC': 'u', // ü
    '\u00DC': 'u', // Ü
    '\u0131': 'i', // ı
    '\u0130': 'i', // İ
    '\u00F6': 'o', // ö
    '\u00D6': 'o', // Ö
  };

  for (let key in trMap) {
    text = text.replace(new RegExp(key, 'g'), trMap[key]);
  }
  return text
    .trim()
    .replace(/[^-a-zA-Z0-9\s]+/gi, '')
    .replace(/\s/gi, '-')
    .replace(/-+/gi, '-')
    .toLowerCase();
};

export const firstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const randomizeArray = <T,>(array?: T[]): T[] => {
  const randomized = [...(array ?? [])];
  for (let i = randomized.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
  }
  return randomized;
};
