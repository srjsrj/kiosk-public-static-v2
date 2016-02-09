import React, { Component, PropTypes } from 'react';

import provideTranslations from '../HoC/provideTranslations';

import Checkbox from '../common/Checkbox';
import CatalogFilterOptions from './CatalogFilterOptions';

class CatalogFilter extends Component {
  render() {
    return (
      <div className="b-full-filter">
        <Checkbox
          className="b-full-filter__toggle"
          name="filter-toggle"
          id="filter-toggle"
        />
        <label
          className="b-full-filter__trigger"
          htmlFor="filter-toggle"
        >
          <span className="b-btn element--active-opacity b-full-filter__trigger__action b-full-filter__trigger__action_open">
            Показать фильтр
          </span>
          <span className="b-btn element--active-opacity b-full-filter__trigger__action b-full-filter__trigger__action_close">
            Скрыть фильтр
          </span>
        </label>
        <CatalogFilterOptions {...this.props} />
      </div>
    );
  }
}

CatalogFilter.propTypes = {
  filterName: PropTypes.string,
  options: PropTypes.array.isRequired,
  params: PropTypes.object,
  selectedOptions: PropTypes.array,
};

export default provideTranslations(CatalogFilter);