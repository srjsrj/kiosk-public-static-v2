import React, { PropTypes } from 'react';
import Select from '../../common/Select';

export default class PropertyListItemDictionary {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    propertyTitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__row'}>
        <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__option ' + process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__option_full'}>
          <h3 className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__title'}>
            {this.props.propertyTitle}
          </h3>
          <Select
            name={this.props.name}
            onChange={this.props.onChange}
            options={this.props.options}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}