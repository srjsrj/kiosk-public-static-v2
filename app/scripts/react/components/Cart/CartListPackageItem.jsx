import React, { Component, PropTypes } from 'react';
import AssetImage from '../common/AssetImage';
import { RelativeImage } from '../common/Image';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';
import { Map } from 'immutable';
import { decamelizeKeys } from 'humps';

class CartListPackageItem extends Component {
  renderGoodDetails() {
    const customAttributes = this.props.item.getIn(['good', 'customAttributes'], Map());

    return customAttributes.map((val, key) => (
      <div className="b-cart__item__option" key={`custom-attr-${key}`}>
        {`${key}: ${val}`}
      </div>
    )).valueSeq();
  }
  render() {
    const {
      item,
    } = this.props;

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <RelativeImage
            className="b-cart__item__img"
            image={item.getIn(['good', 'image'], Map()).toJS()}
            maxHeight={92}
            maxWidth={92}
          />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a
              href={item.get('defaultUrl', '')}
              target="_blank"
            >
              {item.getIn(['good', 'title'], '')}
            </a>
          </h2>
          {this.renderGoodDetails()}
        </div>
        <div className="b-cart__item__col-quantity" />
        <div className="b-cart__item__col-price">
          <div className="b-cart__item__price">
            <HumanizedMoneyWithCurrency
              money={decamelizeKeys(item.getIn(['good', 'actualPrice'], Map()).toJS())}
            />
          </div>
        </div>
        <div className="b-cart__item__col-remove">
          <a
            className="b-cart__item__remove"
            data-method="delete"
            href={item.get('destroyUrl')}
          >
            <AssetImage src="images/cross_white.svg" />
          </a>
        </div>
      </li>
    );
  }
}

CartListPackageItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartListPackageItem;