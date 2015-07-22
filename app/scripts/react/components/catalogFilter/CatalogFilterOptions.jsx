import CatalogFilterSelectedOptions from './CatalogFilterSelectedOptions';
import CatalogFilterCheckbox from './CatalogFilterCheckbox';
import CatalogFilterRadio from './CatalogFilterRadio';
import CatalogFilterRange from './CatalogFilterRange';
import CatalogFilterColor from './CatalogFilterColor';

let CatalogFilterOptions = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    params: React.PropTypes.object,
    filterName: React.PropTypes.string
  },

  render() {
    return (
      <ul className="b-full-filter__list-wrap">
        {this.renderSelectedOptions()}
        {this.renderOptions()}
      </ul>
    );
  },
  renderSelectedOptions() {
    if (this.props.selectedOptions.length) {
      return <CatalogFilterSelectedOptions {...this.props} />;
    }
  },
  renderOptions() {
    return this.props.options.map((item, i) => {
      switch(item.type) {
        case 'checkbox':
          var { title, paramName, items } = item;

          return (
            <CatalogFilterCheckbox
                items={items}
                title={title}
                paramName={paramName}
                filterName={this.props.filterName}
                params={this.props.params}
                key={i} />
          );
        case 'radio':
          var { title, value, paramName, items } = item;

          return (
            <CatalogFilterRadio
                items={items}
                title={title}
                value={value}
                default={item.default}
                paramName={paramName}
                filterName={this.props.filterName}
                params={this.props.params}
                key={i} />
          );
        case 'range':
          var { title, paramName, units, valueFrom, valueTo, from, to, step } = item;

          return (
            <CatalogFilterRange
                title={title}
                from={from}
                to={to}
                valueFrom={valueFrom}
                valueTo={valueTo}
                units={units}
                paramName={paramName}
                step={step}
                filterName={this.props.filterName}
                params={this.props.params}
                key={i} />
          );
        case 'color':
          var { title, paramName, items } = item;

          return (
            <CatalogFilterColor
                items={items}
                title={title}
                paramName={paramName}
                filterName={this.props.filterName}
                params={this.props.params}
                key={i} />
          );
        default:
          console.warn('Unknown item type of CatalogFilterList component', item);
          return null;
      }
    });
  }
});

export default CatalogFilterOptions;