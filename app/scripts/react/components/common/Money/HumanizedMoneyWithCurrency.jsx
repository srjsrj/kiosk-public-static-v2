import React, { PropTypes } from 'react';
import HumanizedMoney from './HumanizedMoney';

export default class HumanizedMoneyWithCurrency {
  static propTypes = {
    money: PropTypes.object.isRequired,
  }
  render() {
    const { money } = this.props;

    return (
      <span>
        <HumanizedMoney money={money} /> {money.currency.html_name}
      </span>
    );
  }
}