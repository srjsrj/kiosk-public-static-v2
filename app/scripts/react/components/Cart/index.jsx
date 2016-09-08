import React, { Component, PropTypes } from 'react';
import Cart from './Cart';
import provideTranslations from '../HoC/provideTranslations';

class CartContainer extends Component {
  render() {
    const {
      availablePackageItems,
      cart,
      formAuthenticity,
      t,
    } = this.props;

    return (
      <Cart
        availablePackageItems={availablePackageItems}
        cart={cart}
        formAuthenticity={formAuthenticity}
        t = {t}
      />
    );
  }
}

CartContainer.propTypes = {
  availablePackageItems: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  formAuthenticity: PropTypes.object,
  t: PropTypes.func.isRequired,
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
  ] ,
  cart: {
    'id': 12888853,
    'total_price': {
      'cents': 200000,
      'currency_iso_code': 'RUB',
    },
    'total_with_delivery_price': {
      'cents': 223000,
      'currency_iso_code': 'RUB',
    },
    'products_with_package_price': {
      'cents': 200000,
      'currency_iso_code': 'RUB',
    },
    'products_price': {
      'cents': 200000,
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
    'items': [
      {
        'good': {
          'id': 29992,
          'global_id': 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yOTk5Mg',
          'updated_at': '2016-08-23T20:27:59.365+03:00',
          'created_at': '2015-08-12T14:14:10.478+03:00',
          'article': null,
          'type': 'ProductItem',
          'title': 'Браслет HIMÈRE',
          'image': {
            'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/29886/f6c04ba9-cd53-432f-a187-87529e2e7204.jpg',
            'product_id': 33644,
            'vendor_id': 68,
            'id': 29886,
          },
          'custom_attributes': {
            'Бренд': 'HIMÈRE',
            'Материал': 'Шелковая нить',
            'Вставка': 'Серебро',
            'Фурнитура': 'Серебро',
          },
          'default_url': 'http://stage.kiiiosk.ru/products/33644-braslet-him-re',
          'quantity_unit': {
            'id': 'pcs',
            'short': 'шт.',
          },
          'category': {
            'id': 1763,
            'name': 'Браслеты-нитки',
            'full_name': 'Украшения/Браслеты-нитки',
            'parent_id': 2926,
            'updated_at': '2016-08-24T01:51:14.514+03:00',
            'position': 17,
            'has_children': false,
            'is_root': {
              'id': 1562,
              'vendor_id': 68,
              'created_at': '2015-02-12T17:25:35.641+03:00',
              'updated_at': '2016-08-24T01:51:20.519+03:00',
              'position': 814,
              'ancestry': null,
              'products_count': 512,
              'published_products_count': 138,
              'ms_uuid': null,
              'stock_synced_at': null,
              'stock_dump': null,
              'externalcode': null,
              'deleted_at': null,
              'vk_album_id': 222612770,
              'active_products_count': 301,
              'deep_products_count': 2978,
              'deep_published_products_count': 1290,
              'deep_active_products_count': 2257,
              'stock_description': null,
              'meta_title': null,
              'meta_keywords': null,
              'meta_description': null,
              'h1': null,
              'image': {
                'url': 'http://assets.stage.kiiiosk.ru/images/fallback/product-none.png',
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
            'products_count': 79,
          },
          'quantity': 7,
          'count': 7,
          'description': null,
          'stock_synced_at': '2016-08-20T16:15:01.425+03:00',
          'max_orderable_quantity': 7,
          'has_ordering_goods': true,
          'sku': 'product-33644-29992',
          'ms_consignment_uuid': 'a205ed99-40de-11e5-90a2-8ecb00072723',
          'ms_uuid': 'a205eb4c-40de-11e5-90a2-8ecb00072722',
          'is_archived': false,
          'is_sale': false,
          'actual_price': {
            'cents': 200000,
            'currency_iso_code': 'RUB',
          },
          'price': {
            'cents': 200000,
            'currency_iso_code': 'RUB',
          },
          'selling_by_weight': false,
        },
        'quantity': 1,
        'selling_by_weight': false,
        'weight': null,
        'count': 1,
        'destroy_path': '/cart/items/74350',
        'errors': {},
      },
    ],
    'package_item': null,
    'items_amount': 1,
    'default_url': '/cart',
    'errors': {},
    'updated_at': '2016-09-07T17:59:53.324+03:00',
    'created_at': '2016-09-07T17:38:05.153+03:00',
    'session_id': '8f6d1be5a77168c4ee523632eac265b2',
  },
  formAuthenticity: {
    'method': 'patch',
    'token': 'REFKvsEf/pWfNDoRM3LPVHNgTIY5d32YR4P/xACndXk=',
  },
};

export default provideTranslations(CartContainer);
