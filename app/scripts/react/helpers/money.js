import numeral from 'numeral';

export function humanizedMoneyWithCurrency(money) {
  if (!money) return '-';
  return `${humanizedMoney(money)} ${money.currency.html_name}`;
}

export function humanizedMoney(money) {
  const unit = money.cents / money.currency.subunit_to_unit;
  return numeral(unit).format('0,0[.]00');
}