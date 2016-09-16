import React, { Component, PropTypes } from 'react';
import Cart from './Cart';
import provideTranslations from '../HoC/provideTranslations';
import connectToRedux from '../HoC/connectToRedux';
import { connect } from 'react-redux';
import {
  setAmount as changeAmount,
  selectPackage,
  initCart,
  fetchCart,
} from '../../actions/CartActions';
import {
  initPackages,
  fetchPackages,
} from '../../actions/PackagesActions';
import {
  initCartStore,
} from '../../reducers/cart';
import {
  initPackageStore,
} from '../../reducers/packages';
import {
  canUseDOM,
} from '../../helpers/dom';
import { Map, List } from 'immutable';

const emptyErrors = Map();
const emptyAmounts = Map();
const emptyItems = List();
const emptyItem = Map();
const emptyPrice = Map();

let storeInitialized = false;

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.changeAmount = this.changeAmount.bind(this);
    this.selectPackage = this.selectPackage.bind(this);
  }
  componentWillMount() {
    const {
      initCart,
      initialCart,
      initPackages,
      initialPackages,
    } = this.props;

    if (!storeInitialized && canUseDOM()) {
      initCart(initialCart);
      initPackages(initialPackages);
      storeInitialized = true;
    }
  }
  changeAmount(id, amount) {
    this.props.changeAmount(id, amount);
  }
  selectPackage(id) {
    this.props.selectPackage(id);
  }
  render() {
    return (
      <Cart {...this.props}
        changeAmount={this.changeAmount}
        selectPackage={this.selectPackage}
      />
    );
  }
}

CartContainer.propTypes = {
  amounts: PropTypes.object.isRequired,
  cartDefaultUrl: PropTypes.string.isRequired,
  cartErrors: PropTypes.object.isRequired,
  cartIsFetching: PropTypes.bool.isRequired,
  cartItems: PropTypes.object.isRequired,
  changeAmount: PropTypes.func.isRequired,
  couponCode: PropTypes.string,
  initialCart: PropTypes.object,
  initialPackages: PropTypes.array,
  fetchCart: PropTypes.func.isRequired,
  fetchPackages: PropTypes.func.isRequired,
  formAuthenticity: PropTypes.object,
  initCart: PropTypes.func.isRequired,
  initPackages: PropTypes.func.isRequired,
  packageItem: PropTypes.object.isRequired,
  packages: PropTypes.object.isRequired,
  packagesIsFetching: PropTypes.bool.isRequired,
  prices: PropTypes.object.isRequired,
  selectPackage: PropTypes.func.isRequired,
  selectedPackage: PropTypes.string,
  t: PropTypes.func.isRequired,
  totalPrice: PropTypes.object.isRequired,
};

CartContainer.defaultProps = {
  formAuthenticity: {
    method: 'patch',
  },
};

export default provideTranslations(connectToRedux(connect(
  (state, ownProps) => {
    const {
      initialCart,
      initialPackages,
    } = ownProps;
    const {
      cart,
      packages: packagesStore,
    } = storeInitialized
      ? state
      : ({
        cart: initCartStore(state.cart, initCart(initialCart)),
        packages: initPackageStore(state.packages, initPackages(initialPackages)),
      });

    const cartDefaultUrl = cart.getIn(['cart', 'defaultUrl'], '');
    const cartErrors = cart.getIn(['cart', 'errors'], emptyErrors);
    const cartItems = cart.getIn(['cart', 'items'], emptyItems);
    const cartIsFetching = cart.get('isFetching', false);
    const packageItem = cart.getIn(['cart', 'packageItem']) || emptyItem;
    const packagesIsFetching = packagesStore.get('isFetching', false);
    const packages = packagesStore.get('packages', emptyItems);
    const selectedPackage = cart.get('selectedPackage', null);
    const amounts = cart.get('amounts', emptyAmounts);
    const couponCode = cart.getIn(['coupon', 'value'], '');
    const prices = amounts
      .map((amount, itemId) => {
        const item = cartItems.find(((i) => i.get('id') === itemId), Map());
        const actualPrice = item.getIn(['good', 'actualPrice'], emptyPrice);

        return actualPrice.set('cents', amount * actualPrice.get('cents', 0));
      });
    const selectedPackagePrice = selectedPackage
      ? packages.find((p) => p.get('globalId') === selectedPackage, Map()).getIn(['price', 'cents'], 0)
      : 0;
    const packagePrice = !packageItem.isEmpty()
      ? packageItem.getIn(['good', 'actualPrice', 'cents'])
      : selectedPackagePrice;
    const totalPrice = cart
      .getIn(['cart', 'totalPrice'], emptyPrice)
      .set('cents', prices.reduce(((acc, price) => acc + price.get('cents', 0)), packagePrice));

    return {
      amounts,
      cartDefaultUrl,
      cartErrors,
      cartIsFetching,
      cartItems,
      couponCode,
      packageItem,
      packages,
      packagesIsFetching,
      prices,
      selectedPackage,
      totalPrice,
    };
  },
  {
    changeAmount,
    selectPackage,
    initCart,
    fetchCart,
    initPackages,
    fetchPackages,
  }
)(CartContainer)));


/*
export const testProps = {
  initialCart: {
    'id': 12888853,
    'total_price': {
      'cents': 1210000,
      'currency_iso_code': 'RUB',
    },
    'total_with_delivery_price': {
      'cents': 1233000,
      'currency_iso_code': 'RUB',
    },
    'products_with_package_price': {
      'cents': 1210000,
      'currency_iso_code': 'RUB',
    },
    'products_price': {
      'cents': 1210000,
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
        'id': 74353,
        'good': {
          'id': 15369,
          'global_id': 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8xNTM2OQ',
          'updated_at': '2016-09-09T09:09:54.517+03:00',
          'created_at': '2015-02-22T00:02:42.493+03:00',
          'article': '',
          'type': 'ProductItem',
          'title': 'Кольцо ANNA.M.OBJECTS (размер: 13,5)',
          'image': {
            'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/60815/d2efff73-55d4-4d8b-9221-df8c10c58d6c.jpg',
            'product_id': 20943,
            'vendor_id': 68,
            'id': 60815,
          },
          'custom_attributes': {
            'Бренд': 'ANNA.M.OBJECTS',
            'Материал': 'Серебро',
          },
          'default_url': 'http://stage.kiiiosk.ru/products/20943-koltso-anna-m-objects',
          'quantity_unit': {
            'id': 'pcs',
            'short': 'шт.',
          },
          'category': {
            'id': 1587,
            'name': 'Кольца',
            'full_name': 'Украшения/Кольца',
            'parent_id': 2926,
            'updated_at': '2016-09-09T09:11:23.384+03:00',
            'position': 22,
            'has_children': false,
            'is_root': {
              'id': 1562,
              'vendor_id': 68,
              'created_at': '2015-02-12T17:25:35.641+03:00',
              'updated_at': '2016-09-09T09:11:24.322+03:00',
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
            'products_count': 647,
          },
          'quantity': 4,
          'count': 4,
          'description': null,
          'stock_synced_at': '2016-08-20T16:15:01.425+03:00',
          'max_orderable_quantity': 4,
          'has_ordering_goods': true,
          'sku': 'product-20943-15369',
          'ms_consignment_uuid': '8343dab0-ba05-11e4-90a2-8ecb0034af84',
          'ms_uuid': '8343d80d-ba05-11e4-90a2-8ecb0034af81',
          'is_archived': false,
          'is_sale': false,
          'actual_price': {
            'cents': 100000,
            'currency_iso_code': 'RUB',
          },
          'price': {
            'cents': 100000,
            'currency_iso_code': 'RUB',
          },
          'selling_by_weight': true,
        },
        'quantity': 1,
        'selling_by_weight': true,
        'weight': 1.1,
        'count': 1,
        'destroy_path': '/cart/items/74353',
        'errors': {},
      },
      {
        'id': 74352,
        'good': {
          'id': 32394,
          'global_id': 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8zMjM5NA',
          'updated_at': '2016-09-09T09:11:22.928+03:00',
          'created_at': '2015-10-11T18:27:07.366+03:00',
          'article': '',
          'type': 'ProductItem',
          'title': 'Моносережка HIMÈRE',
          'image': {
            'url': 'http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/33163/3aa3b03d-c4a5-4ac9-b78e-93443678e00d.jpg',
            'product_id': 35836,
            'vendor_id': 68,
            'id': 33163,
          },
          'custom_attributes': {
            'Бренд': 'HIMÈRE',
            'Материал': 'Серебро',
            'Высота': '4.5 см',
            'Покрытие': 'Позолота',
          },
          'default_url': 'http://stage.kiiiosk.ru/products/35836-monoserezhka-him-re',
          'quantity_unit': {
            'id': 'pcs',
            'short': 'шт.',
          },
          'category': {
            'id': 1583,
            'name': 'Серьги',
            'full_name': 'Украшения/Серьги',
            'parent_id': 2926,
            'updated_at': '2016-09-09T09:11:24.173+03:00',
            'position': 27,
            'has_children': false,
            'is_root': {
              'id': 1562,
              'vendor_id': 68,
              'created_at': '2015-02-12T17:25:35.641+03:00',
              'updated_at': '2016-09-09T09:11:24.322+03:00',
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
            'products_count': 453,
          },
          'quantity': 0,
          'count': 0,
          'description': null,
          'stock_synced_at': '2016-08-20T16:15:01.425+03:00',
          'max_orderable_quantity': 0,
          'has_ordering_goods': false,
          'sku': 'product-35836-32394',
          'ms_consignment_uuid': 'd5864dfb-701a-11e5-7a40-e89700212367',
          'ms_uuid': 'd5864bc1-701a-11e5-7a40-e89700212366',
          'is_archived': false,
          'is_sale': false,
          'actual_price': {
            'cents': 900000,
            'currency_iso_code': 'RUB',
          },
          'price': {
            'cents': 900000,
            'currency_iso_code': 'RUB',
          },
          'selling_by_weight': false,
        },
        'quantity': 1,
        'selling_by_weight': false,
        'weight': null,
        'count': 1,
        'destroy_path': '/cart/items/74352',
        'errors': {
          'count': [
            'Данный товар закончился',
          ],
        },
      },
      {
        'id': 74351,
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
            'updated_at': '2016-09-09T09:11:23.444+03:00',
            'position': 17,
            'has_children': false,
            'is_root': {
              'id': 1562,
              'vendor_id': 68,
              'created_at': '2015-02-12T17:25:35.641+03:00',
              'updated_at': '2016-09-09T09:11:24.322+03:00',
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
        'destroy_path': '/cart/items/74351',
        'errors': {},
      },
    ],
    'package_item': null,
    'items_amount': 3,
    'default_url': '/cart',
    'errors': {
      'all_ordering?': [
        'В корзине лежат товары не доступные к заказу',
      ],
    },
    'updated_at': '2016-09-08T17:25:40.853+03:00',
    'created_at': '2016-09-07T17:38:05.153+03:00',
    'session_id': '8f6d1be5a77168c4ee523632eac265b2',
  },
  initialPackages: [
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
  formAuthenticity: {
    'method': 'patch',
    'token': 'REFKvsEf/pWfNDoRM3LPVHNgTIY5d32YR4P/xACndXk=',
  },
};
*/
