import React, { Component, PropTypes } from 'react';

const STRING_TYPE = 'string';
const TEXTAREA_TYPE = 'textarea';

class CheckoutFields extends Component {
  renderItem(item) {
    const { onChange } = this.props;
    const {
      isDisabled,
      isRequired,
      value,
      source: { name, type, placeholder, title },
    } = item;
    const itemId = `vendor_order_${name}`;
    const itemName = `vendor_order[${name}]`;

    let itemContent = null;
    switch(type) {
      case STRING_TYPE:
        itemContent = (
          <div className="form-group string">
            <label className="string control-label" htmlFor={itemId}>
              {title} {isRequired && '*'}
            </label>
            <input
              className="string form-control"
              disabled={isDisabled}
              id={itemId}
              name={itemName}
              onChange={(ev) => onChange(name, ev.target.value)}
              placeholder={placeholder}
              type="text"
              value={value}
            />
          </div>
        );
        break;
      case TEXTAREA_TYPE:
        itemContent = (
          <div className="form-group text">
            <label className="text control-label" htmlFor={itemId}>
              {title} {isRequired && '*'}
            </label>
            <textarea
              className="text form-control"
              disabled={isDisabled}
              id={itemId}
              name={itemName}
              onChange={(ev) => onChange(name, ev.target.value)}
              placeholder={placeholder}
              value={value}
            />
          </div>
        );
        break;
    }

    return (
      <div className="b-form__row__widget" key={name}>
        {itemContent}
      </div>
    );
  }
  render() {
    const { currentDelivery, items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item))}
      </span>
    );
  }
}

CheckoutFields.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};
CheckoutFields.defaultProps = {
  items: [],
};

export default CheckoutFields;