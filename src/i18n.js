import ReactNative, {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './locales/en.json';
import ar from './locales/ar.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ar,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = I18nManager.isRTL;
// I18n.locale = 'ar';
// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export const strings = (name, params = {}) => {
  return I18n.t(name, params);
};
export const setLocale = language => {
  I18n.locale = language;
};
//I18n.locale = 'ar';
export default I18n;
