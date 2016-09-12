import React, { Component, PropTypes } from 'react';
import CartListItem from './CartListItem';
import CartListPackageItem from './CartListPackageItem';
import CartListPackages from './CartListPackages';

class CartList extends Component {
  render() {
    const {
      amounts,
      changeAmount,
      items,
      packageItem,
      packages,
      prices,
      t,
    } = this.props;

    return (
      <ul className="b-cart__list">
        {items.map((item, idx) => {
          const itemId = item.get('id');

          return (
            <CartListItem
              amount={amounts.get(itemId, 0)}
              changeAmount={changeAmount}
              item={item}
              key={`cart-item-${idx}`}
              price={prices.get(itemId, 0)}
              t={t}
            />
          );
        }).valueSeq()}
        {packageItem && !packageItem.isEmpty()
          ? (
            <CartListPackageItem
              item={packageItem}
              t={t}
            />
          )
          : <CartListPackages packages={packages} t={t} />
        }
      </ul>
    );
  }
}

CartList.propTypes = {
  amounts: PropTypes.object.isRequired,
  changeAmount: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  packageItem: PropTypes.object,
  packages: PropTypes.object.isRequired,
  prices: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default CartList;
