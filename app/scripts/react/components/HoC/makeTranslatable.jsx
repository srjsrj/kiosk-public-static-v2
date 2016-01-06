import React, { Component, PropTypes } from 'react';
import translate from '../HoC/translate';
import localeLanguages from '../../constants/localeLanguages';

export default (ComposedComponent) => (
  class Translatable extends Component {
    static propTypes = {
      i18n: PropTypes.shape({
        locale: PropTypes.oneOf(localeLanguages).isRequired,
        translations: PropTypes.object.isRequired,
      }),
    }
    componentWillMount() {
      // if (this.props.i18n) {
      //   const { locale, translations } = this.props.i18n;

      //   i18n.init({
      //     fallbackLng: 'ru',
      //     interpolationPrefix: '%{',
      //     interpolationSuffix: '}',
      //     lng: locale,
      //     resStore: {
      //       [locale]: {
      //         translation: translations,
      //       },
      //     },
      //   });

      //   i18n.setLng(locale);
      // }
    }
    render() {
      return (
        <ComposedComponent {...this.props} ref="translatable" />
      );
    }
  }
)