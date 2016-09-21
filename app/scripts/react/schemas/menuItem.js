import { PropTypes } from 'react';

const menuItem = PropTypes.shape({
  children: PropTypes.arrayOf(lazyMenuItem).isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  products_count: PropTypes.number,
  link_target: PropTypes.string,
});

function lazyMenuItem() {
  return menuItem.apply(null, arguments);
}

export default menuItem;
