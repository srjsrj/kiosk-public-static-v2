import React, { Component, PropTypes } from 'react';
import { simpleFormat } from '../../helpers/text';

class CheckoutPayments extends Component {
  renderItem(item) {
    const {
      current,
      itemFieldName,
      onChange,
    } = this.props;
    const itemId = item.get('id');
    const currentId = current.get('id');

    return (
      <div className="b-form__row__widget" key={itemId}>
        <span className="b-form__radio">
          <label>
            <input
              checked={!current.isEmpty() && itemId === currentId}
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
              onChange={() => onChange(item)}
              type="radio"
              value={itemId}
            />
            <div className="b-cart__form__payment-name">
              {item.get('title')}
              {!!item.get('showIcon') && <img src={item.get('iconUrl', '')} />}
            </div>
            <div
              className="b-cart__form__payment-description"
              dangerouslySetInnerHTML={{ __html: simpleFormat(item.get('description')) }}
            />
          </label>
        </span>
      </div>
    );
  }
  render() {
    const {
      items,
    } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item)).valueSeq()}
      </span>
    );
  }
}

CheckoutPayments.propTypes = {
  current: PropTypes.object.isRequired,
  itemFieldName: PropTypes.string,
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

CheckoutPayments.defaultProps = {
  itemFieldName: 'payment_type_id',
};

export default CheckoutPayments;
