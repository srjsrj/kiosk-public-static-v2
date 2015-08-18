import classnames from 'classnames';
import CatalogFilterExpandButton from './CatalogFilterExpandButton';
import { showFilteredCount } from '../../actions/catalogFilterActions';

const MAX_VISIBLE_LIMIT = 10,
      COLLAPSED_VISIBLE_COUNT = 5;

let CatalogFilterCheckbox = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    paramName: React.PropTypes.string.isRequired,
    filterName: React.PropTypes.string
  },

  getInitialState() {
    return {
      expanded: !this.isHugeList()
    };
  },

  render() {
    let itemClasses = classnames('b-full-filter__item', {
      'b-full-filter__item--full': this.state.expanded,
      'b-full-filter__item--short': !this.state.expanded
    });

    return (
      <li className={itemClasses}>
        <div className="b-full-filter__item__title">
          {this.props.title}
        </div>
        {this.renderOptions()}
        <CatalogFilterExpandButton
            expanded={this.state.expanded}
            onClick={this.expandList} />
      </li>
    );
  },

  renderOptions() {
    let checked = [],
        unchecked = [];

    this.props.items.forEach((item) => {
      item.checked ? checked.push(item) : unchecked.push(item)
    });

    let items = checked.concat(unchecked);

    let options = items
      .map((item, i) => {
        let optionClasses = classnames('b-cbox', {
          'b-cbox--full': !this.isOptionVisible(item, i)
        });

        return (
          <label className={optionClasses} key={i}>
            <input type="checkbox"
                   name={this.getFieldName(item)}
                   defaultChecked={item.checked}
                   className="b-cbox__native"
                   onChange={this.handleChange} />
            <div className="b-cbox__val">
              {item.name}
            </div>
          </label>
        );
      });

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  },

  isHugeList() {
    return this.props.items.length > MAX_VISIBLE_LIMIT;
  },

  isOptionVisible(option, index) {
    if (this.isHugeList()) {
      return option.checked || index + 1 <= COLLAPSED_VISIBLE_COUNT;
    } else {
      return true;
    }
  },

  expandList() {
    this.setState({expanded: true});
  },  

  getFieldName(item) {
    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}][${item.paramValue}]`;
    } else {
      return `${this.props.paramName}[${item.paramValue}]`;
    }
  },

  handleChange(e) {
    const filter = this.getFilter();
    showFilteredCount(filter);
  },

  getFilter() {
    let filter = $(this.getDOMNode()).closest('form').serialize();

    if (this.props.params && this.props.params.category_id) {
      filter = filter ?
        filter + '&category_id=' + this.props.params.category_id :
        '?category_id=' + this.props.params.category_id
    }

    return filter;
  }
});

export default CatalogFilterCheckbox;