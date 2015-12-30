import React, { Component, PropTypes, createElement } from 'react';

const getDisplayName = (Component) => (
  Component.displayName || Component.name || 'Component'
);

const translate = (WrappedComponent) => {
  let t, i18n;

  class Translate extends Component {
    constructor(props, context) {
      super(props, context);
      i18n = context.i18n;

      this.state = {
        i18nLoadedAt: null,
      };
    }
    componentWillMount() {
      this.mounted = true;
      t = i18n.getFixedT();
    }
    componentDidMount() {
      this.onI18nChanged = () => {
        if (!this.mounted) return;

        this.setState({ i18nLoadedAt: new Date() });
      };

      i18n.on('languageChanged loaded', this.onI18nChanged);
    }
    componentWillUnmount() {
      this.mounted = false;

      if (this.onI18nChanged) {
        i18n.off('languageChanged', this.onI18nChanged);
        i18n.off('loaded', this.onI18nChanged);
      }
    }
    onI18nChange() {
      if (!this.mounted) return;
      this.setState({ i18nLoadedAt: new Date() });
    }
    render() {
      const { i18nLoadedAt } = this.state;
      return createElement(WrappedComponent, {...this.props, t, i18nLoadedAt});
    }
  };

  Translate.contextTypes = {
    i18n: PropTypes.object.isRequired,
  };
  Translate.displayName = `Translate[${getDisplayName(WrappedComponent)}]`;

  return Translate;
};

export default translate;