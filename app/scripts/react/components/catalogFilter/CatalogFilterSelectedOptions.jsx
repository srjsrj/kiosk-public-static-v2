import React, { PropTypes } from 'react';
import URI from 'URIjs';

export default class CatalogFilterSelectedOptions {
  static propTypes = {
    selectedOptions: PropTypes.array.isRequired
  }
  render() {
    return (
      <li className="b-full-filter__item">
        <div className="b-full-filter__item__title">Текущий выбор</div>
        {this.renderOptions()}
      </li>
    );
  }
  renderOptions() {
    const options = this.props.selectedOptions.map((item, i) => (
      <span
        className="b-full-filter__value"
        onClick={() => this.removeOption(item)}
        key={i}
      >
        {item.name}
      </span>
    ));

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  }
  removeOption(item) {
    window.location = new URI().search(item.query).toString();
  }
}