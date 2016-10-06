import { PropTypes } from 'react';
import good from './good';
import money from './money';

const {
  shape,
  string,
  number,
} = PropTypes;

export default shape({
  count: number.isRequired,
  title: string.isRequired,
  total_price: money.isRequired,
  quantity_unit: string.isRequired,
  image_url: string.isRequired,
  good: good.isRequired,
});
