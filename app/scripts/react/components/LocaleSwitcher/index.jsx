import React, { Component, PropTypes } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

class LocaleSwitcherContainer extends Component {
  handleChange(value) {;
    window.location = value
  }
  render() {
    return (
      <LocaleSwitcher {...this.props} onChange={this.handleChange} />
    );
  }
}

LocaleSwitcherContainer.propTypes = {
  locales: PropTypes.arrayOf(
    PropTypes.shape({
      lang: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  current: PropTypes.string,
};

LocaleSwitcherContainer.defaultProps = {
  locales: [],
  current: 'ru',
};

export default LocaleSwitcherContainer;
