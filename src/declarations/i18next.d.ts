import 'i18next';

// Constant
import translation from '../constants/translations/tr';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof translation.common;
      auth: typeof translation.auth;
      response: typeof translation.response;
    };
  }
}
