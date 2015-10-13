import numeral from 'numeral';

export function numberToHumanSize(number) {
  return numeral(number).format('0.00 b');
}