import React, { PropTypes } from 'react';
import ProductCard from '.';

// const props = {
//   "product": {
//     "id": 3910,
//     "title": "Поддон белый с подставками",
//     "article": "SE004-00",
//     "has_ordering_goods": false,
//     "is_sale": false,
//     "is_label_new": false,
//     "is_run_out": true,
//     "is_sold": true,
//     "description": "<p></p>",
//     "sale_percent": null,
//     "main_category": {
//       "id": 626,
//       "name": "Торговое оборудование",
//       "is_root": false,
//       "public_url": "http://wannabe.3001.vkontraste.ru/categories/626-torgovoe-oborudovanie",
//       "parent": {
//         "id": 612,
//         "name": "Корневая категория",
//         "is_root": true,
//         "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
//         "parent": null
//       }
//     },
//     "categories": [
//       {
//         "id": 626,
//         "name": "Торговое оборудование",
//         "is_root": false,
//         "public_url": "http://wannabe.3001.vkontraste.ru/categories/626-torgovoe-oborudovanie",
//         "parent": {
//           "id": 612,
//           "name": "Корневая категория",
//           "is_root": true,
//           "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
//           "parent": null
//         }
//       }
//     ],
//     "goods": [
//       {
//         "title": "Поддон белый с подставками",
//         "article": "SE004-00",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzM5MTA",
//         "is_ordering": false,
//         "is_run_out": true,
//         "is_sale": false,
//         "is_preorder": false,
//         "price": {
//           "cents": 200000,
//           "to_f": 2000,
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
//           },
//           "currency_iso_code": "RUB"
//         },
//         "actual_price": {
//           "cents": 200000,
//           "to_f": 2000,
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
//           },
//           "currency_iso_code": "RUB"
//         }
//       }
//     ],
//     "images": [
//       {
//         "title": "Поддон белый с подставками",
//         "url": "http://3001.vkontraste.ru/images/fallback/product-none.png"
//       }
//     ],
//     "attributes": [],
//     "custom_product_html": "",
//     "text_blocks": [],
//     "video_embed_html": null
//   },
//   "similarProducts": []
// }

export default class ProductCardContainer {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  // static defaultProps = {...props};
  render() {
    return <ProductCard {...this.props} />;
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