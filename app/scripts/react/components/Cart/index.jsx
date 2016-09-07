import React, { Component, PropTypes } from 'react';
import Cart from './Cart';
import provideTranslations from '../HoC/provideTranslations';

class CartContainer extends Component {
  render() {
    const {
      availablePackageItems,
      cart,
      errorMessages,
      formAuthenticity,
      t,
      vendorCartPath,
    } = this.props;

    return (
      <Cart
        availablePackageItems={availablePackageItems}
        cart={cart}
        errorMessages={errorMessages}
        formAuthenticity={formAuthenticity}
        t = {t}
        vendorCartPath={vendorCartPath}
      />
    );
  }
}

CartContainer.propTypes = {
  availablePackageItems: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  errorMessages: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  t: PropTypes.func.isRequired,
  vendorCartPath: PropTypes.string.isRequired,
};

CartContainer.defaultProps = {
  availablePackageItems: [
    {
      'id': 43869,
      'global_id': 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5',
      'category_ids': [
        4763,
        1562,
      ],
      'title': 'Подарочная упаковка САХАРОК',
      'updated_at': '2016-08-20T17:21:19.084+03:00',
      'union_position': 670,
      'price': {
        'cents': 15000,
        'currency_iso_code': 'RUB',
      },
      'is_published': true,
      'is_manual_published': true,
      'is_sold': false,
      'has_ordering_goods': true,
      'total_items_quantity': 17,
      'quantity_unit': {
        'id': 'pcs',
        'short': 'шт.',
      },
      'operator_state': {
        'css_class': '__published',
        'visible': true,
        'title': 'OK',
      },
      'article': null,
      'ident': '#43869',
      'ms_code': null,
      'description': 'Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.',
      'is_archived': false,
      'edit_path': '/operator/products/43869/edit',
      'image': {
        'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg',
        'product_id': 43869,
        'vendor_id': 68,
        'id': 51342,
      },
      'images': [
        {
          'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg',
          'product_id': 43869,
          'vendor_id': 68,
          'id': 51342,
        },
        {
          'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/61777/26849fea-2d79-4fa3-bb47-1fdc4d18751f.jpg',
          'product_id': 43869,
          'vendor_id': 68,
          'id': 61777,
        },
      ],
    },
  ],
  cart: {
    'id': 13275600,
    'total_price': {
      'cents': 450000,
      'currency_iso_code': 'RUB',
    },
    'total_with_delivery_price': {
      'cents': 473000,
      'currency_iso_code': 'RUB',
    },
    'products_with_package_price': {
      'cents': 450000,
      'currency_iso_code': 'RUB',
    },
    'products_price': {
      'cents': 450000,
      'currency_iso_code': 'RUB',
    },
    'delivery_price': {
      'cents': 23000,
      'currency_iso_code': 'RUB',
    },
    'package_price': {
      'cents': 0,
      'currency_iso_code': 'RUB',
    },
    'items': [{
      'good': {
        'id': 27689,
        'global_id': 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yNzY4OQ',
        'updated_at': '2016-08-30T21:58:58.778+03:00',
        'created_at': '2015-05-28T15:03:40.023+03:00',
        'article': null,
        'type': 'ProductItem',
        'title': 'Кольцо NATALIA BRYANTSEVA (размер: 16)',
        'image': {
          'url': 'http://assets.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/8053/6e993711-5a58-482b-b411-84648172aa32.jpg',
          'product_id': 22172,
          'vendor_id': 68,
          'id': 8053,
        },
        'quantity_unit': {
          'id': 'pcs',
          'short': 'шт.',
        },
        'category': {
          'id': 1587,
          'name': 'Кольца',
          'full_name': 'Украшения/Кольца',
          'parent_id': 2926,
          'updated_at': '2016-09-06T16:21:08.293+03:00',
          'position': 22,
          'has_children': false,
          'is_root': {
            'id': 1562,
            'vendor_id': 68,
            'created_at': '2015-02-12T17:25:35.641+03:00',
            'updated_at': '2016-09-06T17:05:14.554+03:00',
            'position': 814,
            'ancestry': null,
            'products_count': 512,
            'published_products_count': 141,
            'ms_uuid': null,
            'stock_synced_at': null,
            'stock_dump': null,
            'externalcode': null,
            'deleted_at': null,
            'vk_album_id': 222612770,
            'active_products_count': 301,
            'deep_products_count': 3033,
            'deep_published_products_count': 1338,
            'deep_active_products_count': 2321,
            'stock_description': null,
            'meta_title': null,
            'meta_keywords': null,
            'meta_description': null,
            'h1': null,
            'image': {
              'url': 'http://assets.kiiiosk.ru/images/fallback/product-none.png',
            },
            'cached_default_slug': 'kornevaya-kategoriya',
            'vk_synced_at': '2015-10-13T16:32:21.517+03:00',
            'stock_title': null,
            'show_children_products': false,
            'custom_title_translations': {
              'ru': 'Корневая категория',
            },
            'description_translations': {
              'ru': null,
            },
            'bottom_text_translations': null,
            'cached_title_translations': {
              'ru': 'Корневая категория',
            },
          },
          'products_count': 657,
        },
        'quantity': 4,
        'count': 4,
        'description': null,
        'stock_synced_at': '2016-08-30T20:08:10.561+03:00',
        'sku': 'product-22172-27689',
        'ms_consignment_uuid': '553aa11c-052e-11e5-7a40-e897001a31c8',
        'ms_uuid': '553a9c18-052e-11e5-7a40-e897001a31c6',
        'is_archived': false,
        'is_sale': false,
        'actual_price': {
          'cents': 450000,
          'currency_iso_code': 'RUB',
        },
        'price': {
          'cents': 450000,
          'currency_iso_code': 'RUB',
        },
        'selling_by_weight': false,
      },
      'quantity': 1,
      'selling_by_weight': false,
      'weight': null,
      'count': 1,
    }],
    'items_amount': 1,
    'updated_at': '2016-09-06T17:58:04.201+03:00',
    'created_at': '2016-09-06T17:58:04.201+03:00',
    'session_id': '08f75da02b3da17b78293625a3564c5e',
  },
  errorMessages: [],
  vendorCartPath: '/cart',
};

export default provideTranslations(CartContainer);
