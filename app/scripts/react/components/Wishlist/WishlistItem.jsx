import React, { Component, PropTypes } from 'react';
import schemas from '../../schemas';
import AssetImage from '../common/AssetImage';
import { humanizedMoneyWithCurrency } from '../../helpers/money';
import GoodDetails from '../common/GoodDetails';
import WishlistAddToCartButton from './WishlistAddToCartButton';

class WishlistItem extends Component {
  render() {
    const {
      item,
      isInCart,
      isPrivate,
      t,
    } = this.props;

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <Image />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a
              href=""
              target="_blank"
            >
              {item.product.title}
            </a>
          </h2>
          <GoodDetails details={item.good.custom_attributes} />
        </div>
        <div className="b-cart__item__col-quantity" />
        <div className="b-cart__item__col-price">
          <div className="b-cart__item__price">
            {item.good.price != null
              ? humanizedMoneyWithCurrency(item.good.price)
              : t('vendor.wishlist.no_price')
            }
          </div>
          {item.good.has_ordering_goods && (
            <WishlistAddToCartButton
              href={item.good.add_to_cart_url}
              id={item.good.id}
              isInCart={isInCart}
              t={t}
              title={item.good.long_title}
            />
          )}
        </div>
        {isPrivate && (
          <div className="b-cart__item__col-remove">
            <a
              className="b-cart__item__remove"
              data-method="delete"
              href={item.destroy_url}
            >
              <AssetImage src="images/cross_white.svg" />
            </a>
          </div>
        )}
      </li>
    );
  }
}

WishlistItem.propTypes = {
  isInCart: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  item: schemas.wishlistItem,
  t: PropTypes.func.isRequired,
};

export default WishlistItem;
