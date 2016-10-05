import { PropTypes } from 'react';

const {
  shape,
  string,
} = PropTypes;

export default shape({
  body: string.isRequired,
  author: string,
  created_at: string.isRequired,
});
