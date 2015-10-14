import React, { Component, PropTypes } from 'react';
import ProductCard from '.';

// const props = {
//   "product": {
//     "id": 4273,
//     "title": "Миникольцо Полоски без камней черненое",
//     "article": "MR005-02",
//     "has_ordering_goods": true,
//     "is_sale": false,
//     "is_label_new": false,
//     "is_run_out": false,
//     "is_sold": false,
//     "description": "<p></p>",
//     "sale_percent": null,
//     "main_category": {
//       "id": 628,
//       "name": "Миникольцо",
//       "is_root": false,
//       "public_url": "http://wannabe.vagrant.dev:3000/categories/628-koltsa-minikoltso",
//       "parent": {
//         "id": 636,
//         "name": "Кольца",
//         "is_root": false,
//         "public_url": "http://wannabe.vagrant.dev:3000/categories/636-koltsa",
//         "parent": {
//           "id": 612,
//           "name": "Корневая категория",
//           "is_root": true,
//           "public_url": "http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya",
//           "parent": null
//         }
//       }
//     },
//     "categories": [
//       {
//         "id": 628,
//         "name": "Миникольцо",
//         "is_root": false,
//         "public_url": "http://wannabe.vagrant.dev:3000/categories/628-koltsa-minikoltso",
//         "parent": {
//           "id": 636,
//           "name": "Кольца",
//           "is_root": false,
//           "public_url": "http://wannabe.vagrant.dev:3000/categories/636-koltsa",
//           "parent": {
//             "id": 612,
//             "name": "Корневая категория",
//             "is_root": true,
//             "public_url": "http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya",
//             "parent": null
//           }
//         }
//       },
//       {
//         "id": 1524,
//         "name": "Главная страница",
//         "is_root": false,
//         "public_url": "http://wannabe.vagrant.dev:3000/categories/1524-glavnaya-stranitsa",
//         "parent": {
//           "id": 612,
//           "name": "Корневая категория",
//           "is_root": true,
//           "public_url": "http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya",
//           "parent": null
//         }
//       }
//     ],
//     "goods": [
//       {
//         "title": "Размер: 14",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkx",
//         "is_ordering": true,
//         "is_run_out": false,
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
//       },
//       {
//         "title": "Размер: 17",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk0",
//         "is_ordering": true,
//         "is_run_out": false,
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
//       },
//       {
//         "title": "Размер: 19",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk2",
//         "is_ordering": true,
//         "is_run_out": false,
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
//       },
//       {
//         "title": "Размер: 16",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkz",
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
//       },
//       {
//         "title": "Размер: 13",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkw",
//         "is_ordering": true,
//         "is_run_out": false,
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
//       },
//       {
//         "title": "Размер: 15",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTky",
//         "is_ordering": true,
//         "is_run_out": false,
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
//       },
//       {
//         "title": "Размер: 18",
//         "article": "",
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk1",
//         "is_ordering": true,
//         "is_run_out": false,
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
//         "title": "Миникольцо Полоски без камней черненое",
//         "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5300/image.png"
//       },
//       {
//         "title": "Миникольцо Полоски без камней черненое",
//         "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/26264/450123b4-7c9e-4ae9-a04e-05fda504d0a2.jpg"
//       }
//     ],
//     "attributes": [
//       {
//         "property_id": 89,
//         "type": "AttributeDictionary",
//         "title": "Цвет покрытия",
//         "value": "чернение",
//         "products_path": "/entities/46-chernenie"
//       },
//       {
//         "property_id": 93,
//         "type": "AttributeDictionary",
//         "title": "Металл, проба",
//         "value": "Серебро 925",
//         "products_path": "/entities/37-serebro-925"
//       }
//     ],
//     "custom_product_html": "",
//     "text_blocks": [],
//     "video_embed_html": null
//   },
//   "similarProducts": [
//     {
//       "id": 19254,
//       "title": "Миникольцо Orianna черненое без камней",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/6916/a4e7624a-8cb1-4534-a0d7-9ecb2378a38a.jpg",
//       "public_url": "http://wannabe.vagrant.dev:3000/products/19254-minikoltso-orianna-chernenoe-bez-kamney",
//       "goods": [
//         {
//           "id": 14053,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 14056,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 14054,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 14055,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 14057,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 180000,
//             "to_f": 1800,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     },
//     {
//       "id": 19293,
//       "title": "Миникольцо Ribs черненое",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/6883/1714c1f1-2aef-4095-a6bb-49dbbec0078a.jpg",
//       "public_url": "http://wannabe.vagrant.dev:3000/products/19293-minikoltso-ribs-chernenoe",
//       "goods": [
//         {
//           "id": 14164,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 450000,
//             "to_f": 4500,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 450000,
//             "to_f": 4500,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 14165,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 450000,
//             "to_f": 4500,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 450000,
//             "to_f": 4500,
//             "currency": {
//               "iso_code": "RUB",
//               "iso_numeric": "643",
//               "name": "Russian Ruble",
//               "symbol": "₽",
//               "html_name": "руб.",
//               "human_name": "Российские рубли",
//               "symbol_first": false,
//               "thousands_separator": " ",
//               "decimal_mark": ",",
//               "subunit_to_unit": 100,
//               "smallest_denomination": 1,
//               "exponent": 2
//             },
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     },
//     {
//       "id": 35756,
//       "title": "Кольцо на ноготь Шибари петля черненое",
//       "is_sale": false,
//       "has_ordering_goods": false,
//       "is_label_new": false,
//       "is_run_out": true,
//       "is_sold": true,
//       "index_image_url": "http://assets.kiiiosk.ru/images/fallback/product-none.png",
//       "public_url": "http://wannabe.vagrant.dev:3000/products/35756-koltso-na-nogot-shibari-petlya-chernenoe",
//       "goods": [
//         {
//           "id": 35756,
//           "type": "Product",
//           "is_sale": false,
//           "price": null,
//           "actual_price": null
//         }
//       ]
//     },
//     {
//       "id": 35746,
//       "title": "Кольцо Шибари двойной узел серебряное",
//       "is_sale": false,
//       "has_ordering_goods": false,
//       "is_label_new": false,
//       "is_run_out": true,
//       "is_sold": true,
//       "index_image_url": "http://assets.kiiiosk.ru/images/fallback/product-none.png",
//       "public_url": "http://wannabe.vagrant.dev:3000/products/35746-koltso-shibari-dvoynoy-uzel-serebryanoe",
//       "goods": [
//         {
//           "id": 35746,
//           "type": "Product",
//           "is_sale": false,
//           "price": null,
//           "actual_price": null
//         }
//       ]
//     }
//   ]
// }

export default class ProductCardContainer extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  // static defaultProps = props
  state = {
    product: this.props.product
  }
  constructor(props) {
    super(props);

    this.handleProductChange = this.handleProductChange.bind(this);
  }
  handleProductChange(field, value) {
    const { product } = this.state;

    if (!!value) {
      this.setState({
        product: { ...product, [field]: value }
      });
    }
  }
  render() {
    return (
      <ProductCard
        product={this.state.product}
        similarProducts={this.props.similarProducts}
        onProductChange={this.handleProductChange}
      />
    );
  }
}