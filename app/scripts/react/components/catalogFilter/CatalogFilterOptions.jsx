import CatalogFilterSelectedOptions from './CatalogFilterSelectedOptions';
import CatalogFilterCheckbox from './CatalogFilterCheckbox';
import CatalogFilterRadio from './CatalogFilterRadio';
import CatalogFilterRange from './CatalogFilterRange';
import CatalogFilterColor from './CatalogFilterColor';

let CatalogFilterOptions = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    filterName: React.PropTypes.string
  },

  render() {
    return (
      <ul className="b-full-filter__list-wrap">
        <CatalogFilterSelectedOptions selectedOptions={this.props.selectedOptions} />
        {this.renderOptions()}
      </ul>
    );
  },

  renderOptions() {
    return this.props.options.map((item, i) => {
      switch(item.type) {
        case 'checkbox':
          let { title, paramName, items } = item;

          return (
            <CatalogFilterCheckbox
                items={items}
                title={title}
                paramName={paramName}
                filterName={this.props.filterName}
                key={i} />
          );
        case 'radio':
          let { title, value, paramName, items } = item;

          return (
            <CatalogFilterRadio
                items={items}
                title={title}
                value={value}
                paramName={paramName}
                filterName={this.props.filterName}
                key={i} />
          );
        case 'range':
          let { title, paramName, units, valueFrom, valueTo, from, to, stepRules } = item;

          return (
            <CatalogFilterRange
                title={title}
                from={from}
                to={to}
                valueFrom={valueFrom}
                valueTo={valueTo}
                units={units}
                paramName={paramName}
                stepRules={stepRules}
                filterName={this.props.filterName}
                key={i} />
          );
        case 'color':
          let { title, paramName, items } = item;

          return (
            <CatalogFilterColor
                items={items}
                title={title}
                paramName={paramName}
                filterName={this.props.filterName}
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