import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import CatalogFilter from './CatalogFilter.jsx';

class CatalogFilterContainer extends Component {
  render() {
    return (
      <div className="b-item-list__filter">
        <form action={this.props.filterUrl} method="get">
          <CatalogFilter {...this.props} />
        </form>
      </div>
    );
  }
}

CatalogFilterContainer.propTypes = {
  filterName: PropTypes.string,
  filterUrl: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(schemas.catalogFilterOption).isRequired,
  params: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  selectedOptions: PropTypes.arrayOf(schemas.catalogFilterOption).isRequired,
};

CatalogFilterContainer.defaultProps = {
  filterUrl: '',
  options: [],
  params: {},
  selectedOptions: [],
};

export default CatalogFilterContainer;
export { CatalogFilter };
