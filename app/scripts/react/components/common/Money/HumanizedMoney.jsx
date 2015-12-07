import React, { Component, PropTypes } from 'react';
import { humanizedMoney } from '../../../helpers/money';

class HumanizedMoney extends Component {
  render() {
    const { money } = this.props;

    return (
      <span>{humanizedMoney(money)}</span>
    );
  }
}
HumanizedMoney.propTypes = {
  money: PropTypes.shape({
    cents: PropTypes.number.isRequired,
    currency_iso_code: PropTypes.string.isRequired,
  }),
};

export default HumanizedMoney;