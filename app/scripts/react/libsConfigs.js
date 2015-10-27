import i18n from 'i18next';

// i18n
if (gon) {
  const { i18n: { locale = 'ru', translations = {} } } = gon;

  if (!i18n.hasResourceBundle(locale)) {
    i18n.init({
      fallbackLng: 'ru',
      interpolationPrefix: '%{',
      interpolationSuffix: '}',
      lng: locale,
      resStore: {
        [locale]: {
          translation: translations,
        },
      },
    });

    i18n.setLng(locale);
  }
}