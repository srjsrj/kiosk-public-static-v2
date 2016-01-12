
import React, { Component, PropTypes } from 'react';

import map from 'lodash/collection/map';
import size from 'lodash/collection/size';
import get from 'lodash/object/get';
import bind from 'lodash/function/bind';

class LocaleSwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleChange = bind(this.handleChange, this);
  }
  handleChange(event) {
    this.props.onChange( get(event, 'target.value') );
  }
  render() {
    const { currencies, current } = this.props;

    if (size(currencies) <= 1) {
      return false;
    }

    return (
      <select
        className="LocaleSwitcher"
        defaultValue={current}
        onChange={this.handleChange}
      >
        {map(currencies, (currency) =>
          <option value={currency.id} key={currency.id}>
            {currency.title}
          </option>
        )}
      </select>
    );
  }
}

LocaleSwitcher.propTypes = {
  currencies: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
};

export default LocaleSwitcher;
