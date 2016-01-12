
import React, { Component, PropTypes } from 'react';
import URI from 'urijs';

import LocaleSwitcher from './LocaleSwitcher';

class LocaleSwitcherContainer extends Component {
  handleChange(value) {
    const uri = new URI().addQuery('currency', value);
    window.location = uri.toString();
  }
  render() {
    return (
      <LocaleSwitcher {...this.props} onChange={this.handleChange} />
    );
  }
}

LocaleSwitcherContainer.propTypes = {
  currencies: PropTypes.array.isRequired,
  current: PropTypes.string,
};

LocaleSwitcherContainer.defaultProps = {
  currencies: [],
  current: 'ru',
};

export default LocaleSwitcherContainer;
