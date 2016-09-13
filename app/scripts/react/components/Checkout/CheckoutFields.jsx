import React, { Component, PropTypes } from 'react';

const STRING_TYPE = 'string';
const TEXTAREA_TYPE = 'textarea';

class CheckoutFields extends Component {
  renderItem(item) {
    const {
      deliveryType,
      item,
      onChange,
    } = this.props;
    const errorMessage = item.get('errorMessage', '');
    const name = item.get('name', '');
    const type = item.get('type', STRING_TYPE);
    const placeholder = item.get('placeholder', '');
    const title = item.get('title', '');
    const isRequired = deliveryType.get('requiredFields', emptyList).includes(name);
    const isDisabled =

/*
changeDelivery(delivery) {
  const { fields } = this.state;

  this.setState({
    deliveryType: delivery,
    fields: fields.map((field) => {
      const isRequired = delivery
        ? delivery.requiredFields.indexOf(field.source.name) > -1
        : false;
      const isDisabled = delivery
        ? !!delivery.reservedFieldValues[field.source.name]
        : false;
      const value = field.value;
      const reservedValue = delivery && delivery.reservedFieldValues[field.source.name]
        ? delivery.reservedFieldValues[field.source.name]
        : null;

      return { ...field, reservedValue, value, isDisabled, isRequired };
    }),
  });
}


  this.state = {
    deliveryType,
    paymentType,
    fields: fields.map((field) => {
      const isRequired = deliveryType
        ? deliveryType.requiredFields.indexOf(field.name) > -1
        : false;
      const isReserved = deliveryType
        ? !!deliveryType.reservedFieldValues[field.name]
        : false;
      const isDisabled = isReserved || false;
      const value = isReserved
        ? deliveryType.reservedFieldValues[field.name]
        : field.value;

      return {isDisabled, isRequired, value, source: field};
    }),
  };
*/


    const isDisabled
    const {
      isDisabled,
      reservedValue,
      value,
      source: { errorMessage, name, type, placeholder, title },
    } = item;
    const itemId = `vendor_order_${name}`;
    const itemName = `vendor_order[${name}]`;

    let itemContent = null;
    switch(type) {
      case STRING_TYPE:
        itemContent = (
          <div className="form-group string">
            <label className="string control-label" htmlFor={itemId}>
              {title}
            </label>
            <input
              className="string form-control"
              disabled={isDisabled}
              id={itemId}
              name={itemName}
              onChange={(ev) => onChange(name, ev.target.value)}
              placeholder={placeholder}
              type="text"
              value={reservedValue || value}
            />
            {errorMessage &&
              <span className="help-block">{errorMessage}</span>
            }
          </div>
        );
        break;
      case TEXTAREA_TYPE:
        itemContent = (
          <div className="form-group text">
            <label className="text control-label" htmlFor={itemId}>
              {title}
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
            {errorMessage &&
              <span className="help-block">{errorMessage}</span>
            }
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
    return (
      <span>
        {this.props.items.map(item => this.renderItem(item)).valueSeq()}
      </span>
    );
  }
}

CheckoutFields.propTypes = {
  deliveryType: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
CheckoutFields.defaultProps = {
  items: [],
};

export default CheckoutFields;
