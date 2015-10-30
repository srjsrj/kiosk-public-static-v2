import React, { PropTypes, Component } from 'react';
import Checkbox from '../common/Checkbox';
import CatalogFilterOptions from './CatalogFilterOptions';

export default class CatalogFilter extends Component {
  static propTypes = {
    filterName: PropTypes.string,
    options: PropTypes.array.isRequired,
    params: PropTypes.object,
    selectedOptions: PropTypes.array,
  }
  render() {
    return (
      <div className="b-full-filter">
        <Checkbox
          className="b-full-filter__toggle"
          id="filter-toggle"
        />
        <label
          className="b-full-filter__trigger"
          htmlFor="filter-toggle"
        >
          <span className="b-btn b-full-filter__trigger__action b-full-filter__trigger__action_open">
            Показать фильтр
          </span>
          <span className="b-btn b-full-filter__trigger__action b-full-filter__trigger__action_close">
            Скрыть фильтр
          </span>
        </label>
        <CatalogFilterOptions {...this.props} />
      </div>
    );
  }
}