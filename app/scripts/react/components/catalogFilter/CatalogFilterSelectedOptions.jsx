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
      <a href={item.url}
         className="b-full-filter__value"
         key={i}
      >
        {item.name}
      </a>
    ));

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  }
}