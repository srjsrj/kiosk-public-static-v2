import React, { Children, Component, PropTypes } from 'react';

class I18nextProvider extends Component {
  constructor(props, context) {
    super(props, context);
    this.i18n = props.i18n;
  }
  getChildContext() {
    return { i18n: this.i18n };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.i18n !== nextProps.i18n) {
      console.error('[I18nextProvider] does not support changing the i18n object.');
    }
  }
  render() {
    return Children.only(this.props.children);
  }
}

I18nextProvider.propTypes = {
  i18n: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
I18nextProvider.childContextTypes = {
  i18n: PropTypes.object.isRequired,
};

export default I18nextProvider;