import React, { Component, PropTypes } from 'react';
import AssetImage from '../common/AssetImage';
import { Image } from '../common/Image';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartListPackageItem extends Component {
  render() {
    const {
      item,
    } = this.props;

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <Image
            className="b-cart__item__img"
            image={item.good.image}
            maxHeight={92}
            maxWidth={92}
          />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a
              href={item.default_url}
              target="_blank"
            >
              {item.title}
            </a>
          </h2>
          {item.description}
        </div>
        <div className="b-cart__item__col-quantity" />
        <div className="b-cart__item__col-price">
          <div className="b-cart__item__price">
            <HumanizedMoneyWithCurrency money={item.good.price} />
          </div>
        </div>
        <div className="b-cart__item__col-remove">
          <a
            className="b-cart__item__remove"
            data-method="delete"
            href={item.destroy_path}
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
