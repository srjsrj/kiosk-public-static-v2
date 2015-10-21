import React, { PropTypes } from 'react';
import { getHTMLName, isSymbolFirst } from '../../../helpers/money';
import HumanizedMoney from './HumanizedMoney';

export default class HumanizedMoneyWithCurrency {
  static propTypes = {
    money: PropTypes.shape({
      cents: PropTypes.number.isRequired,
      currency_iso_code: PropTypes.string.isRequired,
    }),
  }
  render() {
    const { money } = this.props;
 
    return (
      <span>
        {isSymbolFirst(money)
          ? <span>{getHTMLName(money)} <HumanizedMoney money={money} /></span>
          : <span><HumanizedMoney money={money} /> {getHTMLName(money)}</span>
        }
      </span>
    );
  }
}