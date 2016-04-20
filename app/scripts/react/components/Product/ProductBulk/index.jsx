import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

class ProductBulk extends Component {
  constructor(props) {
    super(props);

    if (this.good()){
      this.state = {
        price:{
          cents: this.getPrice(props.product.weight_of_price),
          currency_iso_code: this.good().actual_price.currency_iso_code
        }
      };
    }
  }
  good(){
    if (this.props.good){
      return this.props.good;
    }else if (this.props.product.has_ordering_goods){
      return this.props.product.goods[0];
    }
  }
  onWeightChange(e) {
    var value = parseFloat(e.target.value)
    if (isNaN(value)){
      value = 0;
    }

    this.setState({
      price:{
        cents: this.getPrice(value),
        currency_iso_code: this.good().actual_price.currency_iso_code
      }
    });
  }
  getPrice(weight){
    return this.good().actual_price.cents * weight / parseFloat(this.props.product.weight_of_price);
  }
  render() {
    const { t } = this.props;
    if (this.good()){
      return (
        <div>
          <span>
            <span>{t('vendor.product.weight')}</span>
            <input ref="input" type="number"
              className="string form-control"
              step="0.01"
              name="cart_item[weight]"
              defaultValue={this.props.product.weight_of_price}
              onChange={this.onWeightChange.bind(this)}
            />
          </span>
          <div className="b-item-full__price p-price">
            <div className="b-item__price">
              <HumanizedMoneyWithCurrency money={this.state.price} />
            </div>
          </div>
        </div>
      );
    }else{
      return null;
    }
  }
}

ProductBulk.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductBulk;
