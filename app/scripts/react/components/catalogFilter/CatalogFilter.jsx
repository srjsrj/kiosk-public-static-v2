import CatalogFilterOptions from './CatalogFilterOptions';
import CatalogFilterShowResultsButton from './CatalogFilterShowResultsButton';

let CatalogFilter = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    categoryId: React.PropTypes.number,
    filterName: React.PropTypes.string
  },

  render() {
    return (
      <div className="b-full-filter">
        <input className="b-full-filter__toggle" id="filter-toggle" type="checkbox" />
        <label className="b-full-filter__trigger" htmlFor="filter-toggle">
          <span className="b-btn b-full-filter__trigger__action b-full-filter__trigger__action_open">
            Показать фильтр
          </span>
          <span className="b-btn b-full-filter__trigger__action b-full-filter__trigger__action_close">
            Скрыть фильтр
          </span>
        </label>
        <CatalogFilterOptions {...this.props} />
        <CatalogFilterShowResultsButton />
        {this.renderHiddenCategoryID()}
      </div>
    );
  },

  renderHiddenCategoryID() {
    if (this.props.categoryId != null) {
      return <input type="hidden" name="category_id" value={this.props.categoryId} />;
    }
  }
});

export default CatalogFilter;