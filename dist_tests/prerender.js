require('../dist/scripts/public.prerender.development');

var blockProps = {
  product: {
    has_ordering_goods: false,
    index_image_url: 'http://assets.stage.kiiosk.ru/uploads/product_image/image/5158/image.png',
    is_label_new: true,
    is_run_out: true,
    is_sale: true,
    is_sold: true,
    public_url: 'http://wannabe.kiiiosk.ru/products/4159-koltso-na-nogot-reznoe-s-tsirkonami-zolochenoe',
    title: 'Кольцо на ноготь резное с цирконами золоченое',
    prices: {
      min_price: {
        cents: 176000,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      },
      max_price: {
        cents: 176000,
        currency: {
          html_name: 'руб.',
          iso_code: 'RUB',
          subunit_to_unit: 100,
        },
      },
    },
    goods: [{
      is_sale: true,
      price: {
        cents: 175000,
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
    }]
  },
};

var cardProps = {
  "product": {
    "id": 3910,
    "title": "Поддон белый с подставками",
    "article": "SE004-00",
    "has_ordering_goods": false,
    "is_sale": false,
    "is_label_new": false,
    "is_run_out": true,
    "is_sold": true,
    "description": "<p></p>",
    "sale_percent": null,
    "main_category": {
      "id": 626,
      "name": "Торговое оборудование",
      "is_root": false,
      "public_url": "http://wannabe.3001.vkontraste.ru/categories/626-torgovoe-oborudovanie",
      "parent": {
        "id": 612,
        "name": "Корневая категория",
        "is_root": true,
        "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
        "parent": null
      }
    },
    "categories": [
      {
        "id": 626,
        "name": "Торговое оборудование",
        "is_root": false,
        "public_url": "http://wannabe.3001.vkontraste.ru/categories/626-torgovoe-oborudovanie",
        "parent": {
          "id": 612,
          "name": "Корневая категория",
          "is_root": true,
          "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
          "parent": null
        }
      }
    ],
    "goods": [
      {
        "title": "Поддон белый с подставками",
        "article": "SE004-00",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzM5MTA",
        "is_ordering": false,
        "is_run_out": true,
        "is_sale": false,
        "is_preorder": false,
        "price": {
          "cents": 200000,
          "to_f": 2000,
          "currency": {
            "iso_code": "RUB",
            "iso_numeric": "643",
            "name": "Russian Ruble",
            "symbol": "₽",
            "html_name": "руб.",
            "human_name": "Российские рубли",
            "symbol_first": false,
            "thousands_separator": " ",
            "decimal_mark": ",",
            "subunit_to_unit": 100,
            "smallest_denomination": 1,
            "exponent": 2
          },
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "to_f": 2000,
          "currency": {
            "iso_code": "RUB",
            "iso_numeric": "643",
            "name": "Russian Ruble",
            "symbol": "₽",
            "html_name": "руб.",
            "human_name": "Российские рубли",
            "symbol_first": false,
            "thousands_separator": " ",
            "decimal_mark": ",",
            "subunit_to_unit": 100,
            "smallest_denomination": 1,
            "exponent": 2
          },
          "currency_iso_code": "RUB"
        }
      }
    ],
    "images": [
      {
        "title": "Поддон белый с подставками",
        "url": "http://3001.vkontraste.ru/images/fallback/product-none.png"
      }
    ],
    "attributes": [],
    "custom_product_html": "",
    "text_blocks": [],
    "video_embed_html": null
  },
  "similarProducts": []
};

React.renderToString(React.createElement(ProductBlock, blockProps));
React.renderToString(React.createElement(ProductCard, cardProps));
console.log('Prendering public components test finished successfully');