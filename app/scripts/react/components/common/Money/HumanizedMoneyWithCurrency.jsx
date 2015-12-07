import React, { Component, PropTypes } from 'react';
import {
  getHTMLName, isCurrencyExists, isSymbolFirst, unknownIsoCodeMessage
} from '../../../helpers/money';
import HumanizedMoney from './HumanizedMoney';

class HumanizedMoneyWithCurrency extends Component {
  render() {
    const { money } = this.props;

    if (isCurrencyExists(money)) {
      return isSymbolFirst(money)
        ? <span>{getHTMLName(money)} <HumanizedMoney money={money} /></span>
        : <span><HumanizedMoney money={money} /> {getHTMLName(money)}</span>
    } else {
      return (
        <span>{unknownIsoCodeMessage(money)}</span>
      );
    }
  }
}
HumanizedMoneyWithCurrency.propTypes = {
  money: PropTypes.shape({
    cents: PropTypes.number.isRequired,
    currency_iso_code: PropTypes.string.isRequired,
  }).isRequired,
};

export default HumanizedMoneyWithCurrency;