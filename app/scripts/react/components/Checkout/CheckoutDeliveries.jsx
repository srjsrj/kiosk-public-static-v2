import React, { Component, PropTypes } from 'react';
import { humanizedMoneyWithCurrency } from '../../helpers/money';
import { simpleFormat } from '../../helpers/text';
import { decamelizeKeys } from 'humps';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';
import { Map } from 'immutable';

class CheckoutDeliveries extends Component {
  renderItem(item) {
    const {
      current,
      itemFieldName,
      onChange,
      t,
    } = this.props;
    const itemId = item.get('id');
    const price = item.get('price', Map());
    const threshold = item.get('freeDeliveryThreshold', Map());

    return (
      <div className="b-form__row__widget" key={itemId}>
        <span className="b-form__radio">
          <label>
            <input
              checked={current && itemId === current.get('id')}
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
              onChange={() => onChange(item)}
              type="radio"
              value={itemId}
            />
            <div className="b-cart__form__delivery-name">
              {item.get('title','')}
            </div>
            <div className="b-cart__form__delivery-price">
              <HumanizedMoneyWithCurrency money={decamelizeKeys(price)} />
            </div>
            {threshold.get('cents')
              ? <div
                  className="cart__form__delivery-address"
                  dangerouslySetInnerHTML={{
                    __html: t('vendor.order.checkout_free_delivery_text_html', {
                      free_delivery_threshold: humanizedMoneyWithCurrency(decamelizeKeys(threshold.toJS())),
                    }),
                  }}
                />
              : null
            }
            <div
              className="cart__form__delivery-address"
              dangerouslySetInnerHTML={{ __html: simpleFormat(item.get('description')) }}
            />
          </label>
        </span>
      </div>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item)).valueSeq()}
      </span>
    );
  }
}

CheckoutDeliveries.propTypes = {
  current: PropTypes.object.isRequired,
  itemFieldName: PropTypes.string,
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};
CheckoutDeliveries.defaultProps = {
  itemFieldName: 'delivery_type_id',
  items: [],
};

export default CheckoutDeliveries;
