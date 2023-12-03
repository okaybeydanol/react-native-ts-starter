// noinspection JSIgnoredPromiseFromCall

import i18n, {ResourceStore} from 'i18next';
import {initReactI18next} from 'react-i18next';

// Constant
import en from '@src/constants/translations/en';
import tr from '@src/constants/translations/tr';

const loadResources = (): ResourceStore['data'] => {
  return {
    en: en,
    tr: tr,
  };
};

// MULTI LANGUAGE HANDLER
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: ['tr', 'en'],
  resources: loadResources(),
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
