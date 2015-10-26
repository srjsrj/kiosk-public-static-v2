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
        translations: {},
      },
    }
    componentWillMount() {
      const { locale, translations } = this.props.i18n;

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
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
)