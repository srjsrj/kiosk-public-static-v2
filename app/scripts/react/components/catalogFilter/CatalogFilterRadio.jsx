import React, { Component, PropTypes, findDOMNode } from 'react';
import { showFilteredCount } from '../../actions/catalogFilterActions';

export default class CatalogFilterRadio extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    paramName: PropTypes.string.isRequired,
    filterName: PropTypes.string,
  }
  state = {
    currentIndex: this.props.items.reduce((prev, item, i) => {
      return item.paramValue === this.props.value ? i : prev;
    }, 0)
  }
  render() {
    return (
      <li className="b-full-filter__item">
        <div className="b-full-filter__item__title">
          {this.props.title}
        </div>
        {this.renderOptions.call(this)}
      </li>
    );
  }
  renderOptions() {
    const options = this.props.items.map((item, i) => (
      <label key={i} className="b-radio">
        <input
          type="radio"
          name={this.getFieldName(item)}
          value={item.paramValue}
          checked={this.state.currentIndex === i}
          className="b-radio__native"
          onChange={this.handleChange.bind(this, i)}
        />
        <div className="b-radio__val">
          {item.name}
        </div>
      </label>
    ));

    return <div className="b-full-filter__widget">{options}</div>;
  }
  getFieldName(item) {
    if (item.paramValue === this.props.default) return;

    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      return this.props.paramName;
    }
  }
  handleChange(index) {
    const filter = this.getFilter();

    showFilteredCount(filter);
    this.setState({ currentIndex: index });
  }
  getFilter() {
    let filter = $(findDOMNode(this)).closest('form').serialize();

    if (this.props.params && this.props.params.category_id) {
      filter = filter ?
        filter + '&category_id=' + this.props.params.category_id :
        '?category_id=' + this.props.params.category_id
    }

    return filter;
  }
}