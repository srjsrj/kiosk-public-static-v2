import React, { PropTypes } from 'react';
import ProductCard from '.';

const props = {
  product: {
    id: 4273,
    title: 'Миникольцо Полоски без камней черненое',
    article: 'MR005-02',
    is_sale: false,
    categories: [{
      id: 1524,
      name: 'Главная страница',
      is_root: true,
      url: 'http://ya.ru'
    }, {
      id: 628,
      name: 'Миникольцо',
      is_root: false,
      url: 'http://google.ru/2',
      vendor: {
        root_category_id: 666
      },
      parent: {
        id: 200,
        name: 'Кольца',
        is_root: false,
        url: 'http://google.ru/1',
        parent: {
          id: 666,
          name: 'Категория',
          is_root: false,
          url: 'http://google.ru/0',
          vendor: {
            root_category_id: 666
          },
        },
        vendor: {
          root_category_id: 666
        },
      },
    }],
    goods: [{
      is_sale: true,
      title: 'Размер 13',
      article: '123c',
      price: {
        cents: 175000,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      },
      actual_price: {
        cents: 175000,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      }
    }, {
      is_sale: true,
      title: 'Размер 14',
      article: '123b',
      price: {
        cents: 174000,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      },
      actual_price: {
        cents: 10550,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      }
    }],
  },
  productImages: [{
    title: 'Миникольцо Полоски без камней черненое',
    url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5300/image.png'
  }, {
    title: 'Миникольцо Полоски без камней черненое',
    url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/26264/450123b4-7c9e-4ae9-a04e-05fda504d0a2.jpg'
  }],
}

export default class ProductCardContainer {
  render() {
    return <ProductCard {...props} />
  }
}




// similarProducts: [{
//     "id": 19276,
//     "title": "Кольцо Punch (Шестигранная печать) с цирконами серебряное",
//     "is_sale": true,
//     "price": {
//       "cents": 600000,
//       "to_f": 6000,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     },
//     "actual_price": {
//       "cents": 449000,
//       "to_f": 4490,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     },
//     "has_ordering_goods": true,
//     "is_label_new": false,
//     "is_run_out": false,
//     "is_sold": false,
//     "index_image_url": "http://assets.kiiiosk.ru/uploads/product_image/image/6841/c0ecd579-6ae3-4913-969e-647e44d955c7.jpg",
//     "public_url": "http://wannabe.3001.vkontraste.ru/products/19276-koltso-punch-shestigrannaya-pechat-s-tsirkonami-serebryanoe",
//     "prices": {
//       "min_price": {
//         "cents": 449000,
//         "to_f": 4490,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "max_price": {
//         "cents": 449000,
//         "to_f": 4490,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     },
//     "goods": [
//       {
//         "id": 14121,
//         "type": null,
//         "is_sale": true,
//         "price": {
//           "cents": 600000,
//           "to_f": 6000,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         },
//         "actual_price": {
//           "cents": 449000,
//           "to_f": 4490,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         }
//       },
//       {
//         "id": 14122,
//         "type": null,
//         "is_sale": true,
//         "price": {
//           "cents": 600000,
//           "to_f": 6000,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         },
//         "actual_price": {
//           "cents": 449000,
//           "to_f": 4490,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         }
//       },
//       {
//         "id": 14124,
//         "type": null,
//         "is_sale": true,
//         "price": {
//           "cents": 600000,
//           "to_f": 6000,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         },
//         "actual_price": {
//           "cents": 449000,
//           "to_f": 4490,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         }
//       },
//       {
//         "id": 14123,
//         "type": null,
//         "is_sale": true,
//         "price": {
//           "cents": 600000,
//           "to_f": 6000,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         },
//         "actual_price": {
//           "cents": 449000,
//           "to_f": 4490,
//           "currency": {
//             "iso_code": "RUB",
//             "iso_numeric": "643",
//             "name": "Russian Ruble",
//             "symbol": "₽",
//             "html_name": "руб.",
//             "human_name": "Российские рубли",
//             "symbol_first": false,
//             "thousands_separator": " ",
//             "decimal_mark": ",",
//             "subunit_to_unit": 100,
//             "smallest_denomination": 1,
//             "exponent": 2
//           }
//         }
//       }
//     ]
//   }, {
//   "id": "4159",
//   "title": "Кольцо на ноготь резное с цирконами золоченое",
//   "is_sale": true,
//   "price": {
//     "cents": 250000,
//     "to_f": 2500,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "actual_price": {
//     "cents": 175000,
//     "to_f": 1750,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "has_ordering_goods": true,
//   "is_label_new": false,
//   "is_run_out": false,
//   "is_sold": false,
//   "index_image_url": "http://assets.kiiiosk.ru/uploads/product_image/image/5158/image.png",
//   "public_url": "http://wannabe.3001.vkontraste.ru/products/4159-koltso-na-nogot-reznoe-s-tsirkonami-zolochenoe",
//   "prices": {
//     "min_price": {
//       "cents": 175000,
//       "to_f": 1750,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     },
//     "max_price": {
//       "cents": 175000,
//       "to_f": 1750,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     }
//   },
//   "goods": [
//     {
//       "id": 17183,
//       "type": null,
//       "is_sale": true,
//       "price": {
//         "cents": 250000,
//         "to_f": 2500,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "actual_price": {
//         "cents": 175000,
//         "to_f": 1750,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     }
//   ]
// }, {
//   "id": "33302",
//   "title": "Кулон Меркаба с цирконами серебряный р",
//   "is_sale": false,
//   "price": {
//     "cents": 490000,
//     "to_f": 4900,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "actual_price": {
//     "cents": 490000,
//     "to_f": 4900,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "has_ordering_goods": true,
//   "is_label_new": false,
//   "is_run_out": false,
//   "is_sold": false,
//   "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg",
//   "public_url": "http://wannabe.3001.vkontraste.ru/products/33302-kulon-merkaba-s-tsirkonami-serebryanyy-r",
//   "prices": {
//     "min_price": {
//       "cents": 490000,
//       "to_f": 4900,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     },
//     "max_price": {
//       "cents": 490000,
//       "to_f": 4900,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     }
//   },
//   "goods": [
//     {
//       "id": 29583,
//       "type": null,
//       "is_sale": false,
//       "price": {
//         "cents": 490000,
//         "to_f": 4900,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "actual_price": {
//         "cents": 490000,
//         "to_f": 4900,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     }
//   ]
// }, {
//   "id": "24198",
//   "title": "Миникольцо Morganna с цирконами черненое",
//   "is_sale": false,
//   "price": {
//     "cents": 430000,
//     "to_f": 4300,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "actual_price": {
//     "cents": 430000,
//     "to_f": 4300,
//     "currency": {
//       "iso_code": "RUB",
//       "iso_numeric": "643",
//       "name": "Russian Ruble",
//       "symbol": "₽",
//       "html_name": "руб.",
//       "human_name": "Российские рубли",
//       "symbol_first": false,
//       "thousands_separator": " ",
//       "decimal_mark": ",",
//       "subunit_to_unit": 100,
//       "smallest_denomination": 1,
//       "exponent": 2
//     }
//   },
//   "has_ordering_goods": true,
//   "is_label_new": false,
//   "is_run_out": false,
//   "is_sold": false,
//   "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25446/43faea2b-5cca-4164-ac57-110fedc5f6ff.jpg",
//   "public_url": "http://wannabe.3001.vkontraste.ru/products/24198-minikoltso-morganna-s-tsirkonami-chernenoe",
//   "prices": {
//     "min_price": {
//       "cents": 430000,
//       "to_f": 4300,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     },
//     "max_price": {
//       "cents": 430000,
//       "to_f": 4300,
//       "currency": {
//         "iso_code": "RUB",
//         "iso_numeric": "643",
//         "name": "Russian Ruble",
//         "symbol": "₽",
//         "html_name": "руб.",
//         "human_name": "Российские рубли",
//         "symbol_first": false,
//         "thousands_separator": " ",
//         "decimal_mark": ",",
//         "subunit_to_unit": 100,
//         "smallest_denomination": 1,
//         "exponent": 2
//       }
//     }
//   },
//   "goods": [
//     {
//       "id": 27367,
//       "type": null,
//       "is_sale": false,
//       "price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "actual_price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     },
//     {
//       "id": 27368,
//       "type": null,
//       "is_sale": false,
//       "price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "actual_price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     },
//     {
//       "id": 27369,
//       "type": null,
//       "is_sale": false,
//       "price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       },
//       "actual_price": {
//         "cents": 430000,
//         "to_f": 4300,
//         "currency": {
//           "iso_code": "RUB",
//           "iso_numeric": "643",
//           "name": "Russian Ruble",
//           "symbol": "₽",
//           "html_name": "руб.",
//           "human_name": "Российские рубли",
//           "symbol_first": false,
//           "thousands_separator": " ",
//           "decimal_mark": ",",
//           "subunit_to_unit": 100,
//           "smallest_denomination": 1,
//           "exponent": 2
//         }
//       }
//     }
//   ]
// }]