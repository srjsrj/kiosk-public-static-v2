import React, { Component, PropTypes } from 'react';

import provideTranslations from '../../HoC/provideTranslations';

import ProductBlockImage from './ProductBlockImage';
import ProductBlockBadges from './ProductBlockBadges';
import ProductPrices from '../ProductPrices';

const ProductBlock = ({ product, t }) => (
  <div className="b-item-list__item">
    <a className="b-item" href={product.public_url}>
      <div className="b-item__pic-wrap">
        <ProductBlockImage product={product} />
        <ProductBlockBadges product={product} t={t} />
      </div>
      <div className="b-item__info">
        <h2 className="b-item__name">
          {product.title}
        </h2>
        {Boolean(product.short_details) &&
          <div className="b-item__details">
            {product.short_details}
          </div>
        }
        <ProductPrices product={product} t={t} />
      </div>
    </a>
  </div>
);

ProductBlock.propTypes = {
  product: PropTypes.object.isRequired,
};
ProductBlock.defaultProps = {
  "product": {
    "id": 43953,
    "title": "Line Ring / Кольцо-линия",
    "is_sale": false,
    "has_ordering_goods": true,
    "is_label_new": true,
    "is_run_out": false,
    "is_sold": false,
    "index_image": {
      "url": "http://assets.kiiiosk.ru/uploads/shop/771/uploads/product_image/image/41181/af9a8bf8-3945-428f-90ee-30e850531904.jpg",
      "width": 1600,
      "height": 1600
    },
    "second_image": {
      "url": "http://assets.kiiiosk.ru/uploads/shop/771/uploads/product_image/image/41182/916d9e60-9df8-47d4-8dc3-8aa208227c0a.jpg",
      "width": 1240,
      "height": 1239
    },
    "public_url": "http://w-o.im/products/43953-line-ring-koltso-liniya",
    "short_details": "",
    "goods": [
      {
        "id": 41510,
        "type": "ProductItem",
        "is_sale": false,
        "price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "id": 41509,
        "type": "ProductItem",
        "is_sale": false,
        "price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "id": 41508,
        "type": "ProductItem",
        "is_sale": false,
        "price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 320000,
          "currency_iso_code": "RUB"
        }
      }
    ]
  },
  "formAuthenticity": {
    "token": "h9MPt9k/DtImQApBmSgauKVx7yJxVgBh34suOXdKj+A=",
    "field": "authenticity_token"
  }
}

export default provideTranslations(ProductBlock);