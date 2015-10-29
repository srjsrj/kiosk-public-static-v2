import numeral from 'numeral';
import currencies from '../models/currencies';

function getCurrency(money) {
  const currencyID = getCurrencyID(money);
  return currencies[currencyID] || null;
}

function getCurrencyID(money) {
  return money.currency_iso_code.toLowerCase();
}

export function getHTMLName(money) {
  const currency = getCurrency(money);

  if (currency && currency.alternate_symbols.length) {
    return currency.alternate_symbols[0];
  } else {
    return currency.html_entity;
  }
}

export function getUnit(money) {
  const currency = getCurrency(money);
  return money.cents / currency.subunit_to_unit;
}

export function isSymbolFirst(money) {
  const currency = getCurrency(money);
  return currency.symbol_first;
}

export function money(money) {
  if (!money) return '-';

  return numeral(getUnit(money)).format('0');
}

export function humanizedMoneyWithCurrency(money) {
  if (!money) return '-';

  return isSymbolFirst(money)
    ? `${humanizedMoney(money)} ${getHTMLName(money)}`
    : `${getHTMLName(money)} ${humanizedMoney(money)}`
}

export function humanizedMoney(money) {
  return numeral(getUnit(money)).format('0,0[.]00');
}