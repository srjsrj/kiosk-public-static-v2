import React, { Component, PropTypes } from 'react';
import i18n from 'i18next';
import localeLanguages from '../../constants/localeLanguages';

export default (ComposedComponent) => (
  class Translatable extends Component {
    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
      i18n: PropTypes.shape({
        locale: PropTypes.oneOf(localeLanguages).isRequired,
        translations: PropTypes.object.isRequired,
      }),
    }
    static defaultProps = {
      i18n: {
        locale: 'ru',
        translations: {
          vendor: {
            badges: {
              new: 'Новиночка',
              sale_percent: 'SALE - __percent__%',
              not_available: 'Не продаётся',
              sale: 'SALE',
              sold: 'Продано',
            },
          },
        },
      },
    }
    componentWillMount() {
      const { locale, translations } = this.props.i18n;

      i18n.init({
        fallbackLng: 'ru',
        lng: locale,
        resStore: {
          [locale]: {
            translation: translations,
          },
        },
      });

      i18n.setLng(locale);
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
)