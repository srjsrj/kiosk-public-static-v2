import { PropTypes } from 'react';

const { any, arrayOf, bool, number, object, oneOf, shape, string } = PropTypes;

export default shape({
  cents: number.isRequired,
  currency: shape({
    html_name: string.isRequired,
    iso_code: string.isRequired,
    subunit_to_unit: number.isRequired,
  }),
})