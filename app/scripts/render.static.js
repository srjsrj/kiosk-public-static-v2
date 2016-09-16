import './resources/gon';
import './render.libs';
import './render.bundle';

global.CartContainerEmpty = () => React.createElement(CartContainer, {
  initialCart: {
    "id": 12888853,
    "total_price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "total_with_delivery_price": {
      "cents": 38000,
      "currency_iso_code": "RUB"
    },
    "products_with_package_price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "products_price": {
      "cents": 0,
      "currency_iso_code": "RUB"
    },
    "delivery_price": {
      "cents": 23000,
      "currency_iso_code": "RUB"
    },
    "package_price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "items": [],
    "package_item": {
      "id": null,
      "good": {
        "id": 43869,
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5",
        "updated_at": "2016-08-20T17:21:19.084+03:00",
        "created_at": "2015-12-24T12:50:46.106+03:00",
        "article": null,
        "type": "Product",
        "title": "Подарочная упаковка САХАРОК",
        "image": {
          "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
          "product_id": 43869,
          "vendor_id": 68,
          "id": 51342
        },
        "custom_attributes": {
          "Бренд": "САХАРОК"
        },
        "default_url": "http://saharok.stage.kiiiosk.ru/products/43869-podarochnaya-upakovka-saharok",
        "quantity_unit": {
          "id": "pcs",
          "short": "шт."
        },
        "category": {
          "id": 4763,
          "name": "Упаковка",
          "full_name": "Упаковка",
          "parent_id": 1562,
          "updated_at": "2016-09-16T12:26:25.888+03:00",
          "position": 8,
          "has_children": false,
          "is_root": {
            "id": 1562,
            "vendor_id": 68,
            "created_at": "2015-02-12T17:25:35.641+03:00",
            "updated_at": "2016-09-16T12:26:26.250+03:00",
            "position": 814,
            "ancestry": null,
            "products_count": 512,
            "published_products_count": 138,
            "ms_uuid": null,
            "stock_synced_at": null,
            "stock_dump": null,
            "externalcode": null,
            "deleted_at": null,
            "vk_album_id": 222612770,
            "active_products_count": 301,
            "deep_products_count": 2978,
            "deep_published_products_count": 1290,
            "deep_active_products_count": 2257,
            "stock_description": null,
            "meta_title": null,
            "meta_keywords": null,
            "meta_description": null,
            "h1": null,
            "image": {
              "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
            },
            "cached_default_slug": "kornevaya-kategoriya",
            "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
            "stock_title": null,
            "show_children_products": false,
            "custom_title_translations": {
              "ru": "Корневая категория"
            },
            "description_translations": {
              "ru": null
            },
            "bottom_text_translations": null,
            "cached_title_translations": {
              "ru": "Корневая категория"
            }
          },
          "products_count": 1
        },
        "quantity": null,
        "count": 0,
        "description": "Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.",
        "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
        "max_orderable_quantity": 17,
        "has_ordering_goods": true,
        "sku": "product-43869",
        "ms_consignment_uuid": null,
        "ms_uuid": "ead492c5-aa0f-11e5-7a69-9711003580a4",
        "is_archived": false,
        "is_sale": false,
        "actual_price": {
          "cents": 15000,
          "currency_iso_code": "RUB"
        },
        "price": {
          "cents": 15000,
          "currency_iso_code": "RUB"
        },
        "selling_by_weight": false
      },
      "quantity": 0,
      "selling_by_weight": false,
      "weight": null,
      "count": 1,
      "destroy_path": null,
      "errors": {},
      "destroy_url": "http://saharok.stage.kiiiosk.ru/cart/packages/Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5"
    },
    "items_amount": 0,
    "coupon_code": "",
    "default_url": "http://saharok.stage.kiiiosk.ru/cart",
    "errors": {
      "not_empty": [
        "Корзина пуста"
      ]
    },
    "updated_at": "2016-09-16T13:00:19.023+03:00",
    "created_at": "2016-09-07T17:38:05.153+03:00",
    "session_id": "8f6d1be5a77168c4ee523632eac265b2"
  },
  initialPackages: [{
    "id": 43869,
    "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5",
    "category_ids": [
      4763,
      1562
    ],
    "title": "Подарочная упаковка САХАРОК",
    "updated_at": "2016-08-20T17:21:19.084+03:00",
    "union_position": 670,
    "price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "is_published": true,
    "is_manual_published": true,
    "is_sold": false,
    "has_ordering_goods": true,
    "total_items_quantity": 17,
    "quantity_unit": {
      "id": "pcs",
      "short": "шт."
    },
    "operator_state": {
      "css_class": "__published",
      "visible": true,
      "title": "OK"
    },
    "article": null,
    "ident": "#43869",
    "ms_code": null,
    "description": "Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.",
    "is_archived": false,
    "edit_path": "/operator/products/43869/edit",
    "image": {
      "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
      "product_id": 43869,
      "vendor_id": 68,
      "id": 51342
    },
    "images": [{
        "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
        "product_id": 43869,
        "vendor_id": 68,
        "id": 51342
      },
      {
        "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/61777/26849fea-2d79-4fa3-bb47-1fdc4d18751f.jpg",
        "product_id": 43869,
        "vendor_id": 68,
        "id": 61777
      }
    ]
  }]
});

global.CartContainerSelectPackage = () => React.createElement(
  CartContainer, {
    initialCart: {
      "id": 12888853,
      "total_price": {
        "cents": 1340000,
        "currency_iso_code": "RUB"
      },
      "total_with_delivery_price": {
        "cents": 1363000,
        "currency_iso_code": "RUB"
      },
      "products_with_package_price": {
        "cents": 1340000,
        "currency_iso_code": "RUB"
      },
      "products_price": {
        "cents": 1340000,
        "currency_iso_code": "RUB"
      },
      "delivery_price": {
        "cents": 23000,
        "currency_iso_code": "RUB"
      },
      "package_price": {
        "cents": 0,
        "currency_iso_code": "RUB"
      },
      "items": [{
          "id": 74361,
          "good": {
            "id": 15369,
            "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8xNTM2OQ",
            "updated_at": "2016-09-09T09:09:54.517+03:00",
            "created_at": "2015-02-22T00:02:42.493+03:00",
            "article": "",
            "type": "ProductItem",
            "title": "Кольцо ANNA.M.OBJECTS (размер: 13,5)",
            "image": {
              "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/60815/d2efff73-55d4-4d8b-9221-df8c10c58d6c.jpg",
              "product_id": 20943,
              "vendor_id": 68,
              "id": 60815
            },
            "custom_attributes": {
              "Бренд": "ANNA.M.OBJECTS",
              "Материал": "Серебро"
            },
            "default_url": "http://saharok.stage.kiiiosk.ru/products/20943-koltso-anna-m-objects",
            "quantity_unit": {
              "id": "pcs",
              "short": "шт."
            },
            "category": {
              "id": 1587,
              "name": "Кольца",
              "full_name": "Украшения/Кольца",
              "parent_id": 2926,
              "updated_at": "2016-09-16T12:24:07.629+03:00",
              "position": 22,
              "has_children": false,
              "is_root": {
                "id": 1562,
                "vendor_id": 68,
                "created_at": "2015-02-12T17:25:35.641+03:00",
                "updated_at": "2016-09-16T12:24:07.785+03:00",
                "position": 814,
                "ancestry": null,
                "products_count": 512,
                "published_products_count": 138,
                "ms_uuid": null,
                "stock_synced_at": null,
                "stock_dump": null,
                "externalcode": null,
                "deleted_at": null,
                "vk_album_id": 222612770,
                "active_products_count": 301,
                "deep_products_count": 2978,
                "deep_published_products_count": 1290,
                "deep_active_products_count": 2257,
                "stock_description": null,
                "meta_title": null,
                "meta_keywords": null,
                "meta_description": null,
                "h1": null,
                "image": {
                  "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
                },
                "cached_default_slug": "kornevaya-kategoriya",
                "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
                "stock_title": null,
                "show_children_products": false,
                "custom_title_translations": {
                  "ru": "Корневая категория"
                },
                "description_translations": {
                  "ru": null
                },
                "bottom_text_translations": null,
                "cached_title_translations": {
                  "ru": "Корневая категория"
                }
              },
              "products_count": 647
            },
            "quantity": 4,
            "count": 4,
            "description": null,
            "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
            "max_orderable_quantity": 4,
            "has_ordering_goods": true,
            "sku": "product-20943-15369",
            "ms_consignment_uuid": "8343dab0-ba05-11e4-90a2-8ecb0034af84",
            "ms_uuid": "8343d80d-ba05-11e4-90a2-8ecb0034af81",
            "is_archived": false,
            "is_sale": false,
            "actual_price": {
              "cents": 100000,
              "currency_iso_code": "RUB"
            },
            "price": {
              "cents": 100000,
              "currency_iso_code": "RUB"
            },
            "selling_by_weight": true
          },
          "quantity": 1,
          "selling_by_weight": true,
          "weight": 1.6,
          "count": 1,
          "destroy_path": "/cart/items/74361",
          "errors": {}
        },
        {
          "id": 74360,
          "good": {
            "id": 35997,
            "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8zNTk5Nw",
            "updated_at": "2016-09-16T12:24:06.108+03:00",
            "created_at": "2015-11-24T15:11:43.129+03:00",
            "article": "",
            "type": "ProductItem",
            "title": "Кольцо SOLOMEINA NY&LONDONм (размер: 15,5/17)",
            "image": {
              "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/39051/88b8c604-89d6-4073-9ce5-be355f25bec3.jpg",
              "product_id": 39379,
              "vendor_id": 68,
              "id": 39051
            },
            "custom_attributes": {
              "Бренд": "SOLOMEINA NY&LONDON",
              "Материал": "Серебро",
              "Вставка": "Персиковый и серый жемчуг"
            },
            "default_url": "http://saharok.stage.kiiiosk.ru/products/39379-koltso-solomeina-ny-londonm",
            "quantity_unit": {
              "id": "pcs",
              "short": "шт."
            },
            "category": {
              "id": 1562,
              "name": "Корневая категория",
              "full_name": "Корневая категория",
              "parent_id": null,
              "updated_at": "2016-09-16T12:24:07.785+03:00",
              "position": 814,
              "has_children": true,
              "is_root": {
                "id": 1562,
                "vendor_id": 68,
                "created_at": "2015-02-12T17:25:35.641+03:00",
                "updated_at": "2016-09-16T12:24:07.785+03:00",
                "position": 814,
                "ancestry": null,
                "products_count": 512,
                "published_products_count": 138,
                "ms_uuid": null,
                "stock_synced_at": null,
                "stock_dump": null,
                "externalcode": null,
                "deleted_at": null,
                "vk_album_id": 222612770,
                "active_products_count": 301,
                "deep_products_count": 2978,
                "deep_published_products_count": 1290,
                "deep_active_products_count": 2257,
                "stock_description": null,
                "meta_title": null,
                "meta_keywords": null,
                "meta_description": null,
                "h1": null,
                "image": {
                  "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
                },
                "cached_default_slug": "kornevaya-kategoriya",
                "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
                "stock_title": null,
                "show_children_products": false,
                "custom_title_translations": {
                  "ru": "Корневая категория"
                },
                "description_translations": {
                  "ru": null
                },
                "bottom_text_translations": null,
                "cached_title_translations": {
                  "ru": "Корневая категория"
                }
              },
              "products_count": 512
            },
            "quantity": 0,
            "count": 0,
            "description": null,
            "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
            "max_orderable_quantity": 0,
            "has_ordering_goods": false,
            "sku": "product-39379-35997",
            "ms_consignment_uuid": "bf827495-9291-11e5-7a69-971100082342",
            "ms_uuid": "bf826960-9291-11e5-7a69-971100082340",
            "is_archived": false,
            "is_sale": true,
            "actual_price": {
              "cents": 380000,
              "currency_iso_code": "RUB"
            },
            "price": {
              "cents": 500000,
              "currency_iso_code": "RUB"
            },
            "selling_by_weight": false
          },
          "quantity": 1,
          "selling_by_weight": false,
          "weight": null,
          "count": 1,
          "destroy_path": "/cart/items/74360",
          "errors": {
            "count": [
              "Данный товар закончился"
            ]
          }
        },
        {
          "id": 74354,
          "good": {
            "id": 15926,
            "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8xNTkyNg",
            "updated_at": "2016-08-20T17:54:46.834+03:00",
            "created_at": "2015-04-01T18:04:15.723+03:00",
            "article": null,
            "type": "ProductItem",
            "title": "Кольцо VACHE (размер: 12 - 15,5)",
            "image": {
              "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/7537/c6ced9d2-166d-45e4-893d-3bca40fc08eb.jpg",
              "product_id": 20753,
              "vendor_id": 68,
              "id": 7537
            },
            "custom_attributes": {
              "Бренд": "VACHE",
              "Материал": "Серебро"
            },
            "default_url": "http://saharok.stage.kiiiosk.ru/products/20753-koltso-vache",
            "quantity_unit": {
              "id": "pcs",
              "short": "шт."
            },
            "category": {
              "id": 4148,
              "name": "Безразмерные кольца",
              "full_name": "Украшения/Безразмерные кольца",
              "parent_id": 2926,
              "updated_at": "2016-09-16T12:24:07.706+03:00",
              "position": 6,
              "has_children": false,
              "is_root": {
                "id": 1562,
                "vendor_id": 68,
                "created_at": "2015-02-12T17:25:35.641+03:00",
                "updated_at": "2016-09-16T12:24:07.785+03:00",
                "position": 814,
                "ancestry": null,
                "products_count": 512,
                "published_products_count": 138,
                "ms_uuid": null,
                "stock_synced_at": null,
                "stock_dump": null,
                "externalcode": null,
                "deleted_at": null,
                "vk_album_id": 222612770,
                "active_products_count": 301,
                "deep_products_count": 2978,
                "deep_published_products_count": 1290,
                "deep_active_products_count": 2257,
                "stock_description": null,
                "meta_title": null,
                "meta_keywords": null,
                "meta_description": null,
                "h1": null,
                "image": {
                  "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
                },
                "cached_default_slug": "kornevaya-kategoriya",
                "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
                "stock_title": null,
                "show_children_products": false,
                "custom_title_translations": {
                  "ru": "Корневая категория"
                },
                "description_translations": {
                  "ru": null
                },
                "bottom_text_translations": null,
                "cached_title_translations": {
                  "ru": "Корневая категория"
                }
              },
              "products_count": 53
            },
            "quantity": 5,
            "count": 5,
            "description": "",
            "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
            "max_orderable_quantity": 5,
            "has_ordering_goods": true,
            "sku": "product-20753-15926",
            "ms_consignment_uuid": "939b9b0f-d878-11e4-7a40-e897001a8e63",
            "ms_uuid": "939b93ea-d878-11e4-7a40-e897001a8e60",
            "is_archived": false,
            "is_sale": false,
            "actual_price": {
              "cents": 200000,
              "currency_iso_code": "RUB"
            },
            "price": {
              "cents": 200000,
              "currency_iso_code": "RUB"
            },
            "selling_by_weight": false
          },
          "quantity": 4,
          "selling_by_weight": false,
          "weight": null,
          "count": 4,
          "destroy_path": "/cart/items/74354",
          "errors": {}
        }
      ],
      "package_item": null,
      "items_amount": 3,
      "coupon_code": "",
      "default_url": "http://saharok.stage.kiiiosk.ru/cart",
      "errors": {
        "all_ordering?": [
          "В корзине лежат товары не доступные к заказу"
        ]
      },
      "updated_at": "2016-09-16T10:59:48.881+03:00",
      "created_at": "2016-09-07T17:38:05.153+03:00",
      "session_id": "8f6d1be5a77168c4ee523632eac265b2"
    },
    initialPackages: [{
      "id": 43869,
      "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5",
      "category_ids": [
        4763,
        1562
      ],
      "title": "Подарочная упаковка САХАРОК",
      "updated_at": "2016-08-20T17:21:19.084+03:00",
      "union_position": 670,
      "price": {
        "cents": 15000,
        "currency_iso_code": "RUB"
      },
      "is_published": true,
      "is_manual_published": true,
      "is_sold": false,
      "has_ordering_goods": true,
      "total_items_quantity": 17,
      "quantity_unit": {
        "id": "pcs",
        "short": "шт."
      },
      "operator_state": {
        "css_class": "__published",
        "visible": true,
        "title": "OK"
      },
      "article": null,
      "ident": "#43869",
      "ms_code": null,
      "description": "Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.",
      "is_archived": false,
      "edit_path": "/operator/products/43869/edit",
      "image": {
        "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
        "product_id": 43869,
        "vendor_id": 68,
        "id": 51342
      },
      "images": [{
          "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
          "product_id": 43869,
          "vendor_id": 68,
          "id": 51342
        },
        {
          "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/61777/26849fea-2d79-4fa3-bb47-1fdc4d18751f.jpg",
          "product_id": 43869,
          "vendor_id": 68,
          "id": 61777
        }
      ]
    }]
  });

global.CartContainerWithPackage = () => React.createElement(CartContainer, {
  initialCart: {
    "id": 12888853,
    "total_price": {
      "cents": 1355000,
      "currency_iso_code": "RUB"
    },
    "total_with_delivery_price": {
      "cents": 1378000,
      "currency_iso_code": "RUB"
    },
    "products_with_package_price": {
      "cents": 1355000,
      "currency_iso_code": "RUB"
    },
    "products_price": {
      "cents": 1340000,
      "currency_iso_code": "RUB"
    },
    "delivery_price": {
      "cents": 23000,
      "currency_iso_code": "RUB"
    },
    "package_price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "items": [{
        "id": 74361,
        "good": {
          "id": 15369,
          "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8xNTM2OQ",
          "updated_at": "2016-09-09T09:09:54.517+03:00",
          "created_at": "2015-02-22T00:02:42.493+03:00",
          "article": "",
          "type": "ProductItem",
          "title": "Кольцо ANNA.M.OBJECTS (размер: 13,5)",
          "image": {
            "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/60815/d2efff73-55d4-4d8b-9221-df8c10c58d6c.jpg",
            "product_id": 20943,
            "vendor_id": 68,
            "id": 60815
          },
          "custom_attributes": {
            "Бренд": "ANNA.M.OBJECTS",
            "Материал": "Серебро"
          },
          "default_url": "http://saharok.stage.kiiiosk.ru/products/20943-koltso-anna-m-objects",
          "quantity_unit": {
            "id": "pcs",
            "short": "шт."
          },
          "category": {
            "id": 1587,
            "name": "Кольца",
            "full_name": "Украшения/Кольца",
            "parent_id": 2926,
            "updated_at": "2016-09-16T12:26:26.106+03:00",
            "position": 22,
            "has_children": false,
            "is_root": {
              "id": 1562,
              "vendor_id": 68,
              "created_at": "2015-02-12T17:25:35.641+03:00",
              "updated_at": "2016-09-16T12:26:26.250+03:00",
              "position": 814,
              "ancestry": null,
              "products_count": 512,
              "published_products_count": 138,
              "ms_uuid": null,
              "stock_synced_at": null,
              "stock_dump": null,
              "externalcode": null,
              "deleted_at": null,
              "vk_album_id": 222612770,
              "active_products_count": 301,
              "deep_products_count": 2978,
              "deep_published_products_count": 1290,
              "deep_active_products_count": 2257,
              "stock_description": null,
              "meta_title": null,
              "meta_keywords": null,
              "meta_description": null,
              "h1": null,
              "image": {
                "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
              },
              "cached_default_slug": "kornevaya-kategoriya",
              "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
              "stock_title": null,
              "show_children_products": false,
              "custom_title_translations": {
                "ru": "Корневая категория"
              },
              "description_translations": {
                "ru": null
              },
              "bottom_text_translations": null,
              "cached_title_translations": {
                "ru": "Корневая категория"
              }
            },
            "products_count": 647
          },
          "quantity": 4,
          "count": 4,
          "description": null,
          "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
          "max_orderable_quantity": 4,
          "has_ordering_goods": true,
          "sku": "product-20943-15369",
          "ms_consignment_uuid": "8343dab0-ba05-11e4-90a2-8ecb0034af84",
          "ms_uuid": "8343d80d-ba05-11e4-90a2-8ecb0034af81",
          "is_archived": false,
          "is_sale": false,
          "actual_price": {
            "cents": 100000,
            "currency_iso_code": "RUB"
          },
          "price": {
            "cents": 100000,
            "currency_iso_code": "RUB"
          },
          "selling_by_weight": true
        },
        "quantity": 1,
        "selling_by_weight": true,
        "weight": 1.6,
        "count": 1,
        "destroy_path": "/cart/items/74361",
        "errors": {}
      },
      {
        "id": 74360,
        "good": {
          "id": 35997,
          "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8zNTk5Nw",
          "updated_at": "2016-09-16T12:26:24.829+03:00",
          "created_at": "2015-11-24T15:11:43.129+03:00",
          "article": "",
          "type": "ProductItem",
          "title": "Кольцо SOLOMEINA NY&LONDONм (размер: 15,5/17)",
          "image": {
            "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/39051/88b8c604-89d6-4073-9ce5-be355f25bec3.jpg",
            "product_id": 39379,
            "vendor_id": 68,
            "id": 39051
          },
          "custom_attributes": {
            "Бренд": "SOLOMEINA NY&LONDON",
            "Материал": "Серебро",
            "Вставка": "Персиковый и серый жемчуг"
          },
          "default_url": "http://saharok.stage.kiiiosk.ru/products/39379-koltso-solomeina-ny-londonm",
          "quantity_unit": {
            "id": "pcs",
            "short": "шт."
          },
          "category": {
            "id": 1562,
            "name": "Корневая категория",
            "full_name": "Корневая категория",
            "parent_id": null,
            "updated_at": "2016-09-16T12:26:26.250+03:00",
            "position": 814,
            "has_children": true,
            "is_root": {
              "id": 1562,
              "vendor_id": 68,
              "created_at": "2015-02-12T17:25:35.641+03:00",
              "updated_at": "2016-09-16T12:26:26.250+03:00",
              "position": 814,
              "ancestry": null,
              "products_count": 512,
              "published_products_count": 138,
              "ms_uuid": null,
              "stock_synced_at": null,
              "stock_dump": null,
              "externalcode": null,
              "deleted_at": null,
              "vk_album_id": 222612770,
              "active_products_count": 301,
              "deep_products_count": 2978,
              "deep_published_products_count": 1290,
              "deep_active_products_count": 2257,
              "stock_description": null,
              "meta_title": null,
              "meta_keywords": null,
              "meta_description": null,
              "h1": null,
              "image": {
                "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
              },
              "cached_default_slug": "kornevaya-kategoriya",
              "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
              "stock_title": null,
              "show_children_products": false,
              "custom_title_translations": {
                "ru": "Корневая категория"
              },
              "description_translations": {
                "ru": null
              },
              "bottom_text_translations": null,
              "cached_title_translations": {
                "ru": "Корневая категория"
              }
            },
            "products_count": 512
          },
          "quantity": 1,
          "count": 1,
          "description": null,
          "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
          "max_orderable_quantity": 1,
          "has_ordering_goods": true,
          "sku": "product-39379-35997",
          "ms_consignment_uuid": "bf827495-9291-11e5-7a69-971100082342",
          "ms_uuid": "bf826960-9291-11e5-7a69-971100082340",
          "is_archived": false,
          "is_sale": true,
          "actual_price": {
            "cents": 380000,
            "currency_iso_code": "RUB"
          },
          "price": {
            "cents": 500000,
            "currency_iso_code": "RUB"
          },
          "selling_by_weight": false
        },
        "quantity": 1,
        "selling_by_weight": false,
        "weight": null,
        "count": 1,
        "destroy_path": "/cart/items/74360",
        "errors": {}
      },
      {
        "id": 74354,
        "good": {
          "id": 15926,
          "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8xNTkyNg",
          "updated_at": "2016-08-20T17:54:46.834+03:00",
          "created_at": "2015-04-01T18:04:15.723+03:00",
          "article": null,
          "type": "ProductItem",
          "title": "Кольцо VACHE (размер: 12 - 15,5)",
          "image": {
            "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/7537/c6ced9d2-166d-45e4-893d-3bca40fc08eb.jpg",
            "product_id": 20753,
            "vendor_id": 68,
            "id": 7537
          },
          "custom_attributes": {
            "Бренд": "VACHE",
            "Материал": "Серебро"
          },
          "default_url": "http://saharok.stage.kiiiosk.ru/products/20753-koltso-vache",
          "quantity_unit": {
            "id": "pcs",
            "short": "шт."
          },
          "category": {
            "id": 4148,
            "name": "Безразмерные кольца",
            "full_name": "Украшения/Безразмерные кольца",
            "parent_id": 2926,
            "updated_at": "2016-09-16T12:26:26.177+03:00",
            "position": 6,
            "has_children": false,
            "is_root": {
              "id": 1562,
              "vendor_id": 68,
              "created_at": "2015-02-12T17:25:35.641+03:00",
              "updated_at": "2016-09-16T12:26:26.250+03:00",
              "position": 814,
              "ancestry": null,
              "products_count": 512,
              "published_products_count": 138,
              "ms_uuid": null,
              "stock_synced_at": null,
              "stock_dump": null,
              "externalcode": null,
              "deleted_at": null,
              "vk_album_id": 222612770,
              "active_products_count": 301,
              "deep_products_count": 2978,
              "deep_published_products_count": 1290,
              "deep_active_products_count": 2257,
              "stock_description": null,
              "meta_title": null,
              "meta_keywords": null,
              "meta_description": null,
              "h1": null,
              "image": {
                "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
              },
              "cached_default_slug": "kornevaya-kategoriya",
              "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
              "stock_title": null,
              "show_children_products": false,
              "custom_title_translations": {
                "ru": "Корневая категория"
              },
              "description_translations": {
                "ru": null
              },
              "bottom_text_translations": null,
              "cached_title_translations": {
                "ru": "Корневая категория"
              }
            },
            "products_count": 53
          },
          "quantity": 5,
          "count": 5,
          "description": "",
          "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
          "max_orderable_quantity": 5,
          "has_ordering_goods": true,
          "sku": "product-20753-15926",
          "ms_consignment_uuid": "939b9b0f-d878-11e4-7a40-e897001a8e63",
          "ms_uuid": "939b93ea-d878-11e4-7a40-e897001a8e60",
          "is_archived": false,
          "is_sale": false,
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "selling_by_weight": false
        },
        "quantity": 4,
        "selling_by_weight": false,
        "weight": null,
        "count": 4,
        "destroy_path": "/cart/items/74354",
        "errors": {}
      }
    ],
    "package_item": {
      "id": null,
      "good": {
        "id": 43869,
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5",
        "updated_at": "2016-08-20T17:21:19.084+03:00",
        "created_at": "2015-12-24T12:50:46.106+03:00",
        "article": null,
        "type": "Product",
        "title": "Подарочная упаковка САХАРОК",
        "image": {
          "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
          "product_id": 43869,
          "vendor_id": 68,
          "id": 51342
        },
        "custom_attributes": {
          "Бренд": "САХАРОК"
        },
        "default_url": "http://saharok.stage.kiiiosk.ru/products/43869-podarochnaya-upakovka-saharok",
        "quantity_unit": {
          "id": "pcs",
          "short": "шт."
        },
        "category": {
          "id": 4763,
          "name": "Упаковка",
          "full_name": "Упаковка",
          "parent_id": 1562,
          "updated_at": "2016-09-16T12:26:25.888+03:00",
          "position": 8,
          "has_children": false,
          "is_root": {
            "id": 1562,
            "vendor_id": 68,
            "created_at": "2015-02-12T17:25:35.641+03:00",
            "updated_at": "2016-09-16T12:26:26.250+03:00",
            "position": 814,
            "ancestry": null,
            "products_count": 512,
            "published_products_count": 138,
            "ms_uuid": null,
            "stock_synced_at": null,
            "stock_dump": null,
            "externalcode": null,
            "deleted_at": null,
            "vk_album_id": 222612770,
            "active_products_count": 301,
            "deep_products_count": 2978,
            "deep_published_products_count": 1290,
            "deep_active_products_count": 2257,
            "stock_description": null,
            "meta_title": null,
            "meta_keywords": null,
            "meta_description": null,
            "h1": null,
            "image": {
              "url": "http://assets.stage.kiiiosk.ru/images/fallback/product-none.png"
            },
            "cached_default_slug": "kornevaya-kategoriya",
            "vk_synced_at": "2015-10-13T16:32:21.517+03:00",
            "stock_title": null,
            "show_children_products": false,
            "custom_title_translations": {
              "ru": "Корневая категория"
            },
            "description_translations": {
              "ru": null
            },
            "bottom_text_translations": null,
            "cached_title_translations": {
              "ru": "Корневая категория"
            }
          },
          "products_count": 1
        },
        "quantity": null,
        "count": 0,
        "description": "Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.",
        "stock_synced_at": "2016-08-20T16:15:01.425+03:00",
        "max_orderable_quantity": 17,
        "has_ordering_goods": true,
        "sku": "product-43869",
        "ms_consignment_uuid": null,
        "ms_uuid": "ead492c5-aa0f-11e5-7a69-9711003580a4",
        "is_archived": false,
        "is_sale": false,
        "actual_price": {
          "cents": 15000,
          "currency_iso_code": "RUB"
        },
        "price": {
          "cents": 15000,
          "currency_iso_code": "RUB"
        },
        "selling_by_weight": false
      },
      "quantity": 0,
      "selling_by_weight": false,
      "weight": null,
      "count": 1,
      "destroy_path": null,
      "errors": {},
      "destroy_url": "http://saharok.stage.kiiiosk.ru/cart/packages/Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5"
    },
    "items_amount": 3,
    "coupon_code": "",
    "default_url": "http://saharok.stage.kiiiosk.ru/cart",
    "errors": {},
    "updated_at": "2016-09-16T13:00:19.023+03:00",
    "created_at": "2016-09-07T17:38:05.153+03:00",
    "session_id": "8f6d1be5a77168c4ee523632eac265b2"
  },
  initialPackages: [{
    "id": 43869,
    "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQzODY5",
    "category_ids": [
      4763,
      1562
    ],
    "title": "Подарочная упаковка САХАРОК",
    "updated_at": "2016-08-20T17:21:19.084+03:00",
    "union_position": 670,
    "price": {
      "cents": 15000,
      "currency_iso_code": "RUB"
    },
    "is_published": true,
    "is_manual_published": true,
    "is_sold": false,
    "has_ordering_goods": true,
    "total_items_quantity": 17,
    "quantity_unit": {
      "id": "pcs",
      "short": "шт."
    },
    "operator_state": {
      "css_class": "__published",
      "visible": true,
      "title": "OK"
    },
    "article": null,
    "ident": "#43869",
    "ms_code": null,
    "description": "Упаковка из плотной фактурной бумаги, приятной на ощупь, перевязанная атласной лентой.",
    "is_archived": false,
    "edit_path": "/operator/products/43869/edit",
    "image": {
      "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
      "product_id": 43869,
      "vendor_id": 68,
      "id": 51342
    },
    "images": [{
        "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/51342/ad08f5f9-f0dd-4ad9-93bf-ad016c810974.jpg",
        "product_id": 43869,
        "vendor_id": 68,
        "id": 51342
      },
      {
        "url": "http://assets.stage.kiiiosk.ru/uploads/shop/68/uploads/product_image/image/61777/26849fea-2d79-4fa3-bb47-1fdc4d18751f.jpg",
        "product_id": 43869,
        "vendor_id": 68,
        "id": 61777
      }
    ]
  }]
});

global.OrderContainerSample = () => React.createElement(OrderContainer, {
  "deliveryTypeId": 177,
  "paymentTypeId": 105,
  "i18n": {
    "locale": "ru",
    "translations": {
      "vendor": {
        "not_published": "Магазин временно не работает",
        "made_in_kiiiosk": "Сделано на «Киоске»",
        "tasty_product_button_text": "Купить",
        "entities": { "product": "%{count} товар", "product_2": "%{count} товара", "product_5": "%{count} товаров" },
        "badges": { "new": "Новинка", "sale_percent": "SALE - %{percent}%", "not_available": "Не продается", "sale": "SALE", "sold": "Продано" },
        "gallery": { "close": "Закрыть", "next": "Вперёд", "prev": "Назад" },
        "search": { "results_title": "Результаты поиска (%{count})", "nothing_found": "К сожалению, ничего не найдено." },
        "seconds_count": "%{count} секунду",
        "seconds_count_2": "%{count} секунды",
        "seconds_count_5": "%{count} секунд",
        "activemodel": { "errors": { "models": { "vendor_order_form": { "invalid_phone": "Неверный формат телефона. Прим.: +7 913 123 32 10", "attributes": { "address": { "blank": "не может быть пустым" }, "email": { "email": "не является email адресом" }, "city_title": { "blank": "не может быть пустым" }, "phone": { "blank": "не может быть пустым" }, "name": { "blank": "не может быть пустым" }, "public_offer_accepted": { "blank": "Необходимо принять условия публичной оферты" } } } } } },
        "errors": { "cart": { "empty": "В корзине нет товаров" }, "coupon": { "not_found": "Несуществующий промокод %{code}", "expired": "Промокод просрочен %{code}" }, "order": { "invalid_form": "Заказ еще не принят, исправьте ошибки в форме", "has_unorderable_goods": "В заказе лежат недоступные товары", "no_items": "В заказе нет товаров", "unavailable_currency": "Невозможно сделать заказ в выбранной валюте" } },
        "placeholders": { "coupon": "Промо-код (если есть)", "search": "Поиск" },
        "alerts": { "confirm": "Точно очистить?" },
        "flashes": { "good_added_to_basket": "Украшение \"%{title}\" добавлено в корзину" },
        "mails": { "signature": "С уважением, интернет-магазин \"%{name}\"" },
        "auto_menu_items": { "blog": "Блог" },
        "top_banner": { "default_content": "Мы открылись!" },
        "order": { "fields": { "phone": "Телефон", "name": "Полное имя", "email": "Email", "city_title": "Город доставки", "address": "Адрес доставки", "comment": "Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе", "coupon_code": "Промокод" }, "placeholders": { "city_title": "Москва", "phone": "Например, +7 913 123 32 10", "name": "Имя", "address": "Например, Академика Вавилова 12-10", "comment": "О чем нам нужно знать", "email": "Email" }, "submit": "Оформить заказ", "pickup_address": "Адрес самовывоза:", "title": "Заказ №%{number}", "payment_type": "Способ оплаты: %{title}", "delivery_type": "Способ доставки: %{title}", "free_delivery_text_html": "Бесплатная доставка при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e", "checkout_free_delivery_text_html": "Бесплатно при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e", "go_back": "Вернуться назад", "next": "Продолжить", "delivery_tracking_id": "Трекинг-номер доставки: %{number}", "check_state": "Проверить статус доставки", "public_offer_accepted_html": "Согласен с условиями \u003cu\u003e\u003ca href=\"%{url}\" target=\"_blank\"\u003eпубличной оферты\u003c/a\u003e\u003c/u\u003e", "created": { "title": "Спасибо за заказ", "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. \u003cbr\u003e Ваш телефон %{phone} \u003cbr\u003e Ваш заказ %{link} на сумму %{price}\n" }, "new": { "delivery_title": "Выберите тип доставки.", "payment_title": "Способы оплаты", "contacts_title": "Введите данные", "sum": "на сумму" }, "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.", "redirecting": "Переправляю на сайт оплаты", "go_to_payment": "Перейти к оплате", "continue_shopping": "Продолжить покупки", "contents": "Состав заказа:", "delivery_price": "Стоимость доставки", "pay": "Оплатить" },
        "blog": { "read_more": "Читать далее.." },
        "notice": { "catalog_filter": { "selected_products": "Выбрано вариантов", "show_products": "Показать" } },
        "coupon": { "discount": "Скидка - %{discount}", "invalid": "Купон \"%{value}\" НЕ действующий", "checking": "Проверяю купон..", "error": "Ошибка при проверке купона. Попробуйте еще раз" },
        "cart": { "basket_button": "Корзина", "amount": "Количество", "weight": "Вес", "overall": "Итого:", "title": "Корзина", "clear": "Очистить корзину", "not_available": "Больше не продается", "empty": "Пока тут ничего нет" },
        "wishlist": { "add_item": "Добавить в список желаний", "wishlist_button": "Список желаний", "private_title": "Ваш список желаний", "foreign_title": "Чей-то список желаний", "empty": "Пока тут ничего нет", "no_price": "Не продается" },
        "packaging": { "add": "Добавить", "add_gift_package": "Добавить фактурную подарочную упаковку, перевязанную шелковой лентой", "no_package": "Не добавлять" },
        "payment": { "w1": { "failure": { "title": "Оплата не прошла", "desc": "Оплата заказа не была произведена" }, "success": { "title": "Спасибо за заказ", "desc": "Оплата заказа была произведена" } } },
        "category": { "continue_shopping": "Продолжить покупки", "empty": "Ой, а здесь ничего нет. Пока." },
        "dictionary_entity": { "continue_shopping": "Продолжить покупки", "empty": "Ой, а здесь ничего нет. Пока." },
        "similar_product": { "title": "С этим украшением покупают также" },
        "product": { "title": "Товар", "blank_price": "Цена неизвестна", "run_out": "Нет в наличии", "not_available": "Не продается", "available": "Можно купить", "sold_out_message_html": "\u0026laquo;%{title}\u0026raquo; сейчас не продается", "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.", "category_title": "Категория", "show_other_products": "Посмотреть другие товары", "show_all": "Показать все", "weight": "Вес", "kg": "кг." },
        "properties": { "empty": "Нет характеристик для вывода" },
        "property": { "unknown_type": "Неизвестный тип характеристики", "defaults": { "size": "Размер", "color": "Цвет" } },
        "pages": { "titles": { "cart": "Корзина", "order": "Оформление заказа", "payment": "Оплата", "payment_success": "Успешная оплата", "payment_error": "Ошибка оплаты" } },
        "filter": { "availability": "Доступность", "price_range": "Ценовой диапазон", "expand_button": { "expand": "Развернуть список", "turn": "Свернуть список" }, "selected_options": { "availability": "Доступность", "price_range": "Цена от %{from} до %{to} %{currency}" }, "selected_availability": { "all": "Все", "available": "В наличии", "run_out": "Под заказ", "sale": "Распродажа", "unknown": "unknown" } },
        "button": { "to_cart": "Добавить в корзину %{title}", "select_good": "Выберите характеристику", "go_wishlist": "Перейти в \"Список желаний\"", "to_wishlist": "Добавить в \"Список желаний\"", "already": "Уже в корзине", "disable_with": { "sending": "Отправляем...", "saving": "Сохраняем...", "waiting": "Подождите...", "adding": "Добавляем..." } },
        "products": { "others": "Остальные", "nothing_found_by_criteria": "По данным критериям ничего не найдено" },
        "client": { "auth": "Личный кабинет", "no_account": "Нет аккаунта?", "logged_in_with": "Вы уже авторизованы под именем\u003cbr /\u003e \u003cb\u003e%{name}\u003c/b\u003e.", "continue_logged": "Продолжить под этим именем..", "create_account": "Создать", "logout": "Выйти", "cabinet": { "title": "Личный кабинет", "button": "Кабинет", "create": "Создаем личный кабинет", "send_pin_code": "Выслать пин-код", "disable_with": "Высылаем..." } },
        "money": { "unknown_iso_code": "Неизвестный тип валюты %{isoCode}" }
      }
    }
  },
  "formAuthenticity": { "token": "REFKvsEf/pWfNDoRM3LPVHNgTIY5d32YR4P/xACndXk=", "field": "authenticity_token" },
  "cart": { "totalCount": 1, "totalPrice": { "cents": 495000, "currency_iso_code": "RUB" } },
  "deliveryTypes": [{
      "id": 110,
      "title": "Москва – доставка курьером (2-3 дня)",
      "description": "",
      "price": { "cents": 23000, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "city_title", "address", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "city_title",
        "address", "comment"
      ],
      "availablePayments": [105, 69],
      "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
      "reservedFieldValues": { "city_title": "Москва" }
    },
    {
      "id": 910,
      "title": "Срочная доставка",
      "description": "Доставка в течение 3 часов с момента подтверждения заказа оператором магазина. \r\nВ будние дни, в пределах МКАД. \r\nПредоплата или наличные курьеру при получении.\r\nАкция \" От 10000 р. доставка бесплатно\"  на срочную не распространяется.",
      "price": { "cents": 35000, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "city_title", "address", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "city_title",
        "address", "comment"
      ],
      "availablePayments": [105, 69],
      "freeDeliveryThreshold": null,
      "reservedFieldValues": { "city_title": "Москва" }
    },
    {
      "id": 177,
      "title": "Санкт-Петербург - доставка курьером (2-3 дня)",
      "description": "",
      "price": { "cents": 28000, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "city_title", "address", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "city_title",
        "address", "comment"
      ],
      "availablePayments": [105],
      "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
      "reservedFieldValues": { "city_title": "Санкт-Петербург" }
    },
    {
      "id": 111,
      "title": "Регионы – доставка курьером (3-10 рабочих дней. Возможен больший срок для отдаленных пунктов)",
      "description": "",
      "price": { "cents": 50000, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "city_title", "address", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "city_title",
        "address", "comment"
      ],
      "availablePayments": [105],
      "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
      "reservedFieldValues": {}
    },
    {
      "id": 1754,
      "title": "Самовывоз на Никитской",
      "description": "Москва, ул. Б. Никитская, 35, кв.1, код подъезда #423.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.",
      "price": { "cents": 0, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "comment"],
      "availablePayments": [
        105, 69
      ],
      "freeDeliveryThreshold": null,
      "reservedFieldValues": { "city_title": "Москва" }
    },
    {
      "id": 1755,
      "title": "Самовывоз в ARTPLAY",
      "description": "Москва, Центр дизайна ARTPLAY, ул. Нижняя Сыромятническая, 10, стр.9, подъезд D, 3-й этаж.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.",
      "price": { "cents": 0, "currency_iso_code": "RUB" },
      "fields": [
        "name", "phone", "email", "comment"
      ],
      "requiredFields": ["name", "phone", "email", "comment"],
      "availablePayments": [
        105, 69
      ],
      "freeDeliveryThreshold": null,
      "reservedFieldValues": { "city_title": "Москва" }
    }
  ],
  "paymentTypes": [{ "id": 105, "title": "Оплата банковской картой, через терминал или салон связи", "description": "Безопасная оплата любым удобным способом", "icon_url": "/images/payment_icons/order_payment_w1.png", "show_icon": false },
    { "id": 69, "title": "Наличные при получении", "description": "", "icon_url": "/images/payment_icons/order_payment_w1.png", "show_icon": false }
  ],
  "fields": [{ "name": "name", "type": "string", "value": "", "title": "Полное имя", "placeholder": "Имя", "errorMessage": "не может быть пустым" },
    { "name": "phone", "type": "string", "value": "", "title": "Телефон", "placeholder": "Например, +7 913 123 32 10", "errorMessage": "не может быть пустым, Неверный формат телефона. Прим.: +7 913 123 32 10" },
    { "name": "email", "type": "string", "value": "", "title": "Email", "placeholder": "Email", "errorMessage": "" },
    { "name": "city_title", "type": "string", "value": "Санкт-Петербург", "title": "Город доставки", "placeholder": "Москва", "errorMessage": "" },
    { "name": "address", "type": "string", "value": "", "title": "Адрес доставки", "placeholder": "Например, Академика Вавилова 12-10", "errorMessage": "не может быть пустым" },
    { "name": "comment", "type": "textarea", "value": "", "title": "Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе", "placeholder": "О чем нам нужно знать", "errorMessage": "" }
  ],
  "coupon": { "show": true, "value": "" },
  "publicOffer": { "show": false },
  "errorMessage": "Заказ еще не принят, исправьте ошибки в форме",
  "submitOrderUrl": "/orders"
});
global.OrderContainerNoCoupon = () => React.createElement(
  OrderContainer, {
    "deliveryTypeId": 177,
    "paymentTypeId": 105,
    "i18n": { "locale": "ru", "translations": { "vendor": { "not_published": "Магазин временно не работает", "made_in_kiiiosk": "Сделано на «Киоске»", "tasty_product_button_text": "Купить", "entities": { "product": "%{count} товар", "product_2": "%{count} товара", "product_5": "%{count} товаров" }, "badges": { "new": "Новинка", "sale_percent": "SALE - %{percent}%", "not_available": "Не продается", "sale": "SALE", "sold": "Продано" }, "gallery": { "close": "Закрыть", "next": "Вперёд", "prev": "Назад" }, "search": { "results_title": "Результаты поиска (%{count})", "nothing_found": "К сожалению, ничего не найдено." }, "seconds_count": "%{count} секунду", "seconds_count_2": "%{count} секунды", "seconds_count_5": "%{count} секунд", "activemodel": { "errors": { "models": { "vendor_order_form": { "invalid_phone": "Неверный формат телефона. Прим.: +7 913 123 32 10", "attributes": { "address": { "blank": "не может быть пустым" }, "email": { "email": "не является email адресом" }, "city_title": { "blank": "не может быть пустым" }, "phone": { "blank": "не может быть пустым" }, "name": { "blank": "не может быть пустым" }, "public_offer_accepted": { "blank": "Необходимо принять условия публичной оферты" } } } } } }, "errors": { "cart": { "empty": "В корзине нет товаров" }, "coupon": { "not_found": "Несуществующий промокод %{code}", "expired": "Промокод просрочен %{code}" }, "order": { "invalid_form": "Заказ еще не принят, исправьте ошибки в форме", "has_unorderable_goods": "В заказе лежат недоступные товары", "no_items": "В заказе нет товаров", "unavailable_currency": "Невозможно сделать заказ в выбранной валюте" } }, "placeholders": { "coupon": "Промо-код (если есть)", "search": "Поиск" }, "alerts": { "confirm": "Точно очистить?" }, "flashes": { "good_added_to_basket": "Украшение \"%{title}\" добавлено в корзину" }, "mails": { "signature": "С уважением, интернет-магазин \"%{name}\"" }, "auto_menu_items": { "blog": "Блог" }, "top_banner": { "default_content": "Мы открылись!" }, "order": { "fields": { "phone": "Телефон", "name": "Полное имя", "email": "Email", "city_title": "Город доставки", "address": "Адрес доставки", "comment": "Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе", "coupon_code": "Промокод" }, "placeholders": { "city_title": "Москва", "phone": "Например, +7 913 123 32 10", "name": "Имя", "address": "Например, Академика Вавилова 12-10", "comment": "О чем нам нужно знать", "email": "Email" }, "submit": "Оформить заказ", "pickup_address": "Адрес самовывоза:", "title": "Заказ №%{number}", "payment_type": "Способ оплаты: %{title}", "delivery_type": "Способ доставки: %{title}", "free_delivery_text_html": "Бесплатная доставка при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e", "checkout_free_delivery_text_html": "Бесплатно при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e", "go_back": "Вернуться назад", "next": "Продолжить", "delivery_tracking_id": "Трекинг-номер доставки: %{number}", "check_state": "Проверить статус доставки", "public_offer_accepted_html": "Согласен с условиями \u003cu\u003e\u003ca href=\"%{url}\" target=\"_blank\"\u003eпубличной оферты\u003c/a\u003e\u003c/u\u003e", "created": { "title": "Спасибо за заказ", "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. \u003cbr\u003e Ваш телефон %{phone} \u003cbr\u003e Ваш заказ %{link} на сумму %{price}\n" }, "new": { "delivery_title": "Выберите тип доставки.", "payment_title": "Способы оплаты", "contacts_title": "Введите данные", "sum": "на сумму" }, "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.", "redirecting": "Переправляю на сайт оплаты", "go_to_payment": "Перейти к оплате", "continue_shopping": "Продолжить покупки", "contents": "Состав заказа:", "delivery_price": "Стоимость доставки", "pay": "Оплатить" }, "blog": { "read_more": "Читать далее.." }, "notice": { "catalog_filter": { "selected_products": "Выбрано вариантов", "show_products": "Показать" } }, "coupon": { "discount": "Скидка - %{discount}", "invalid": "Купон \"%{value}\" НЕ действующий", "checking": "Проверяю купон..", "error": "Ошибка при проверке купона. Попробуйте еще раз" }, "cart": { "basket_button": "Корзина", "amount": "Количество", "weight": "Вес", "overall": "Итого:", "title": "Корзина", "clear": "Очистить корзину", "not_available": "Больше не продается", "empty": "Пока тут ничего нет" }, "wishlist": { "add_item": "Добавить в список желаний", "wishlist_button": "Список желаний", "private_title": "Ваш список желаний", "foreign_title": "Чей-то список желаний", "empty": "Пока тут ничего нет", "no_price": "Не продается" }, "packaging": { "add": "Добавить", "add_gift_package": "Добавить фактурную подарочную упаковку, перевязанную шелковой лентой", "no_package": "Не добавлять" }, "payment": { "w1": { "failure": { "title": "Оплата не прошла", "desc": "Оплата заказа не была произведена" }, "success": { "title": "Спасибо за заказ", "desc": "Оплата заказа была произведена" } } }, "category": { "continue_shopping": "Продолжить покупки", "empty": "Ой, а здесь ничего нет. Пока." }, "dictionary_entity": { "continue_shopping": "Продолжить покупки", "empty": "Ой, а здесь ничего нет. Пока." }, "similar_product": { "title": "С этим украшением покупают также" }, "product": { "title": "Товар", "blank_price": "Цена неизвестна", "run_out": "Нет в наличии", "not_available": "Не продается", "available": "Можно купить", "sold_out_message_html": "\u0026laquo;%{title}\u0026raquo; сейчас не продается", "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.", "category_title": "Категория", "show_other_products": "Посмотреть другие товары", "show_all": "Показать все", "weight": "Вес", "kg": "кг." }, "properties": { "empty": "Нет характеристик для вывода" }, "property": { "unknown_type": "Неизвестный тип характеристики", "defaults": { "size": "Размер", "color": "Цвет" } }, "pages": { "titles": { "cart": "Корзина", "order": "Оформление заказа", "payment": "Оплата", "payment_success": "Успешная оплата", "payment_error": "Ошибка оплаты" } }, "filter": { "availability": "Доступность", "price_range": "Ценовой диапазон", "expand_button": { "expand": "Развернуть список", "turn": "Свернуть список" }, "selected_options": { "availability": "Доступность", "price_range": "Цена от %{from} до %{to} %{currency}" }, "selected_availability": { "all": "Все", "available": "В наличии", "run_out": "Под заказ", "sale": "Распродажа", "unknown": "unknown" } }, "button": { "to_cart": "Добавить в корзину %{title}", "select_good": "Выберите характеристику", "go_wishlist": "Перейти в \"Список желаний\"", "to_wishlist": "Добавить в \"Список желаний\"", "already": "Уже в корзине", "disable_with": { "sending": "Отправляем...", "saving": "Сохраняем...", "waiting": "Подождите...", "adding": "Добавляем..." } }, "products": { "others": "Остальные", "nothing_found_by_criteria": "По данным критериям ничего не найдено" }, "client": { "auth": "Личный кабинет", "no_account": "Нет аккаунта?", "logged_in_with": "Вы уже авторизованы под именем\u003cbr /\u003e \u003cb\u003e%{name}\u003c/b\u003e.", "continue_logged": "Продолжить под этим именем..", "create_account": "Создать", "logout": "Выйти", "cabinet": { "title": "Личный кабинет", "button": "Кабинет", "create": "Создаем личный кабинет", "send_pin_code": "Выслать пин-код", "disable_with": "Высылаем..." } }, "money": { "unknown_iso_code": "Неизвестный тип валюты %{isoCode}" } } } },
    "formAuthenticity": { "token": "REFKvsEf/pWfNDoRM3LPVHNgTIY5d32YR4P/xACndXk=", "field": "authenticity_token" },
    "cart": { "totalCount": 1, "totalPrice": { "cents": 495000, "currency_iso_code": "RUB" } },
    "deliveryTypes": [{
        "id": 110,
        "title": "Москва – доставка курьером (2-3 дня)",
        "description": "",
        "price": { "cents": 23000, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "city_title", "address", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "city_title",
          "address", "comment"
        ],
        "availablePayments": [105, 69],
        "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
        "reservedFieldValues": { "city_title": "Москва" }
      },
      {
        "id": 910,
        "title": "Срочная доставка",
        "description": "Доставка в течение 3 часов с момента подтверждения заказа оператором магазина. \r\nВ будние дни, в пределах МКАД. \r\nПредоплата или наличные курьеру при получении.\r\nАкция \" От 10000 р. доставка бесплатно\"  на срочную не распространяется.",
        "price": { "cents": 35000, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "city_title", "address", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "city_title",
          "address", "comment"
        ],
        "availablePayments": [105, 69],
        "freeDeliveryThreshold": null,
        "reservedFieldValues": { "city_title": "Москва" }
      },
      {
        "id": 177,
        "title": "Санкт-Петербург - доставка курьером (2-3 дня)",
        "description": "",
        "price": { "cents": 28000, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "city_title", "address", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "city_title",
          "address", "comment"
        ],
        "availablePayments": [105],
        "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
        "reservedFieldValues": { "city_title": "Санкт-Петербург" }
      },
      {
        "id": 111,
        "title": "Регионы – доставка курьером (3-10 рабочих дней. Возможен больший срок для отдаленных пунктов)",
        "description": "",
        "price": { "cents": 50000, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "city_title", "address", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "city_title",
          "address", "comment"
        ],
        "availablePayments": [105],
        "freeDeliveryThreshold": { "cents": 1000000, "currency_iso_code": "RUB" },
        "reservedFieldValues": {}
      },
      {
        "id": 1754,
        "title": "Самовывоз на Никитской",
        "description": "Москва, ул. Б. Никитская, 35, кв.1, код подъезда #423.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.",
        "price": { "cents": 0, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "comment"],
        "availablePayments": [
          105, 69
        ],
        "freeDeliveryThreshold": null,
        "reservedFieldValues": { "city_title": "Москва" }
      },
      {
        "id": 1755,
        "title": "Самовывоз в ARTPLAY",
        "description": "Москва, Центр дизайна ARTPLAY, ул. Нижняя Сыромятническая, 10, стр.9, подъезд D, 3-й этаж.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.",
        "price": { "cents": 0, "currency_iso_code": "RUB" },
        "fields": [
          "name", "phone", "email", "comment"
        ],
        "requiredFields": ["name", "phone", "email", "comment"],
        "availablePayments": [
          105, 69
        ],
        "freeDeliveryThreshold": null,
        "reservedFieldValues": { "city_title": "Москва" }
      }
    ],
    "paymentTypes": [{ "id": 105, "title": "Оплата банковской картой, через терминал или салон связи", "description": "Безопасная оплата любым удобным способом", "icon_url": "/images/payment_icons/order_payment_w1.png", "show_icon": false },
      { "id": 69, "title": "Наличные при получении", "description": "", "icon_url": "/images/payment_icons/order_payment_w1.png", "show_icon": false }
    ],
    "fields": [{ "name": "name", "type": "string", "value": "", "title": "Полное имя", "placeholder": "Имя", "errorMessage": "" },
      { "name": "phone", "type": "string", "value": "", "title": "Телефон", "placeholder": "Например, +7 913 123 32 10", "errorMessage": "" },
      { "name": "email", "type": "string", "value": "", "title": "Email", "placeholder": "Email", "errorMessage": "" },
      { "name": "city_title", "type": "string", "value": "Санкт-Петербург", "title": "Город доставки", "placeholder": "Москва", "errorMessage": "" },
      { "name": "address", "type": "string", "value": "", "title": "Адрес доставки", "placeholder": "Например, Академика Вавилова 12-10", "errorMessage": "" },
      { "name": "comment", "type": "textarea", "value": null, "title": "Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе", "placeholder": "О чем нам нужно знать", "errorMessage": "" }
    ],
    "coupon": { "show": false, "value": "" },
    "publicOffer": { "show": false },
    "errorMessage": "",
    "submitOrderUrl": "/orders"
  });

import './lib/ReactRailsUJS';
