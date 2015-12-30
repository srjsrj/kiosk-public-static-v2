import i18n from 'i18next';
import translations from './mocks/translations';

const LOCALE = 'ru';

i18n.init({
  fallbackLng: 'ru',
  interpolationPrefix: '%{',
  interpolationSuffix: '}',
  lng: LOCALE,
  resStore: {
    [LOCALE]: {
      translation: translations,
    },
  },
});

// i18n.setLng(LOCALE);