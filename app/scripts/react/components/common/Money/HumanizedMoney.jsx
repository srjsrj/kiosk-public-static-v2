import React, { PropTypes } from 'react';
import numeral from 'numeral';

export default class HumanizedMoney {
  static propTypes = {
    money: PropTypes.object.isRequired,
  }
  render() {
    const { money } = this.props;
    const unit = money.cents / money.currency.subunit_to_unit;

    return <span>{numeral(unit).format('0,0[.]00')}</span>;
  }
}