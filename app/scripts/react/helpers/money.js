import { t } from 'i18next';
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
    return currency.html_entity || currency.symbol;
  }
}

export function getUnit(money) {
  const currency = getCurrency(money);
  return money.cents / currency.subunit_to_unit;
}

export function isCurrencyExists(money) {
  return !!getCurrency(money);
}

export function isSymbolFirst(money) {
  const currency = getCurrency(money);
  return currency.symbol_first;
}

export function money(money) {
  if (!money) return '-';
  if (!isCurrencyExists(money)) return unknownIsoCodeMessage(money);

  return numeral(getUnit(money)).format('0');
}

export function humanizedMoney(money) {
  if (!money) return '-';
  if (!isCurrencyExists(money)) return unknownIsoCodeMessage(money);

  return numeral(getUnit(money)).format('0,0[.]00');
}

export function humanizedMoneyWithCurrency(money) {
  if (!money || money.cents === 0) return '-';
  if (!isCurrencyExists(money)) return unknownIsoCodeMessage(money);

  return isSymbolFirst(money)
    ? `${getHTMLName(money)} ${humanizedMoney(money)}`
    : `${humanizedMoney(money)} ${getHTMLName(money)}`;
}

export function unknownIsoCodeMessage(money) {
  return t('vendor.money.unknown_iso_code', {
    isoCode: getCurrencyID(money),
  });
}