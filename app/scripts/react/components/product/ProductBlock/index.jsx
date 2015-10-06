import React, { PropTypes } from 'react';
import Image from '../../common/Image';
import ProductBadges from '../ProductBadges';
import ProductPrices from '../ProductPrices';

// const product = {
//   has_ordering_goods: false,
//   index_image_url: 'http://assets.stage.kiiosk.ru/uploads/product_image/image/5158/image.png',
//   is_label_new: true,
//   is_run_out: true,
//   is_sale: true,
//   is_sold: true,
//   public_url: 'http://wannabe.kiiiosk.ru/products/4159-koltso-na-nogot-reznoe-s-tsirkonami-zolochenoe',
//   title: 'Кольцо на ноготь резное с цирконами золоченое',
//   prices: {
//     min_price: {
//       cents: 176000,
//       currency: {
//         html_name: 'руб.',
//         iso_code: 'RUB',
//         subunit_to_unit: 100,
//       },
//     },
//     max_price: {
//       cents: 176000,
//       currency: {
//         html_name: 'руб.',
//         iso_code: 'RUB',
//         subunit_to_unit: 100,
//       },
//     },
//   },
//   goods: [{
//     is_sale: true,
//     price: {
//       cents: 175000,
//       currency: {
//         html_name: 'руб.',
//         iso_code: 'RUB',
//         subunit_to_unit: 100,
//       },
//     },
//     actual_price: {
//       cents: 10550,
//       currency: {
//         html_name: 'руб.',
//         iso_code: 'RUB',
//         subunit_to_unit: 100,
//       },
//     }
//   }]
// };

export default class ProductBlock {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <div className="b-item-list__item">
        <a className="b-item" href={product.public_url}>
          <div className="b-item__pic-wrap">
            <Image
              className="b-item__pic"
              image={{ url: product.index_image_url }}
              maxWidth={458}
              title={product.title}
            />
            <ProductBadges product={product} />
          </div>
          <div className="b-item__info">
            <h2 className="b-item__name">
              {product.title}
            </h2>
            <ProductPrices product={product} />
          </div>
        </a>
      </div>
    );
  }
}