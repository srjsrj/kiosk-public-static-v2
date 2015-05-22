import Api from '../api/api';

let CatalogFilterActionCreators = {
  getFilteredCount(filter) {
    return Api.catalogFilter.getFilteredCount(filter)
  }
};

export default CatalogFilterActionCreators;