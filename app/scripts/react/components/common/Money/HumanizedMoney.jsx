import React, { PropTypes } from 'react';
import numeral from 'numeral';
import { getUnit } from '../../../helpers/money';

export default class HumanizedMoney {
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
        {numeral(getUnit(money)).format('0,0[.]00')}
      </span>
    );
  }
}