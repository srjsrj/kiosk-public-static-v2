import React, { Component, PropTypes } from 'react';
import provideTranslations from '../../HoC/provideTranslations';
import ProductCart from '../ProductCart';
import ProductPrices from '../ProductPrices';
import ProductCardBadges from './ProductCardBadges';
import ProductCardBreadcrumbs from './ProductCardBreadcrumbs';
import ProductCardDetails from './ProductCardDetails';
import ProductCardGallery from './ProductCardGallery';
import ProductCardSchema from './ProductCardSchema';
import ProductCardSimilarProducts from './ProductCardSimilarProducts';
import ProductCardTitle from './ProductCardTitle';
import ProductCardVideo from './ProductCardVideo';

class ProductCard extends Component {
  state = {
    good: null,
    product: this.props.product,
  }
  isKioskEnvironment() {
    return !!(global.gon && global.gon.kiiiosk);
  }
  handleGoodChange(good) {
    const article = good && good.article || this.state.product.article;
    const product = {
      ...this.state.product,
      article,
    };

    this.setState({ good, product });
  }
  render() {
    const { similarProducts } = this.props;
    const { good, product } = this.state;

    return (
      <div className="mrch-ProductCard cleanslate">
        <div
          className="b-page__content__inner b-page__content__inner_content h-product"
          itemScope={true}
          itemType="http://schema.org/Product"
        >
          <div className="b-item-full">
            <div className="b-item-full__header b-item-full__header_mobile">
              <ProductCardBreadcrumbs product={product} />
              <ProductCardTitle product={product} />
              <ProductCardBadges product={product} />
            </div>

            <div className="b-item-full__content">
              <div className="b-item-full__gallery">
                <ProductCardGallery
                  images={product.images}
                  isKioskEnvironment={this.isKioskEnvironment()}
                />
              </div>
              <div className="b-item-full__description">
                <div className="b-item-full__header">
                  <ProductCardBreadcrumbs className="p-category" product={product} />
                  <ProductCardTitle className="p-name" product={product} />
                  <ProductCardBadges product={product} />
                </div>
                <div className="b-item-full__price p-price">
                  <ProductPrices good={good} product={product} />
                </div>
                <ProductCardSchema product={product} />
                <div className="b-item-full__form">
                  <ProductCart
                    {...this.props}
                    {...this.state}
                    onGoodChange={this.handleGoodChange.bind(this)}
                  />
                </div>
                <ProductCardDetails product={product} />
              </div>
              <ProductCardVideo product={product} />
            </div>

            <ProductCardSimilarProducts products={similarProducts} />
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addWishlistUrl: PropTypes.string,
  formAuthenticity: PropTypes.object,
  hasWishlist: PropTypes.bool,
  isWishlisted: PropTypes.bool,
  product: PropTypes.object,
  similarProducts: PropTypes.array,
  wishlistUrl: PropTypes.string,
};
ProductCard.defaultProps = {
  "product": {
    "id": 24212,
    "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzI0MjEy",
    "title": "Кольцо Lissandra mini серебряное с белыми и черными цирконами",
    "article": "R114-211",
    "has_ordering_goods": true,
    "is_sale": false,
    "is_label_new": false,
    "is_run_out": false,
    "is_sold": false,
    "description": "<p></p>",
    "sale_percent": null,
    "main_category": {
      "id": 619,
      "name": "Кольцо",
      "is_root": false,
      "public_url": "http://wanna-be.ru/categories/619-koltsa-koltso",
      "parent": {
        "id": 636,
        "name": "Кольца",
        "is_root": false,
        "public_url": "http://wanna-be.ru/categories/636-koltsa",
        "parent": {
          "id": 612,
          "name": "Корневая категория",
          "is_root": true,
          "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
          "parent": null
        }
      }
    },
    "categories": [
      {
        "id": 619,
        "name": "Кольцо",
        "is_root": false,
        "public_url": "http://wanna-be.ru/categories/619-koltsa-koltso",
        "parent": {
          "id": 636,
          "name": "Кольца",
          "is_root": false,
          "public_url": "http://wanna-be.ru/categories/636-koltsa",
          "parent": {
            "id": 612,
            "name": "Корневая категория",
            "is_root": true,
            "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
            "parent": null
          }
        }
      },
      {
        "id": 1524,
        "name": "Главная страница",
        "is_root": false,
        "public_url": "http://wanna-be.ru/categories/1524-glavnaya-stranitsa",
        "parent": {
          "id": 612,
          "name": "Корневая категория",
          "is_root": true,
          "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
          "parent": null
        }
      }
    ],
    "goods": [
      {
        "title": "Размер: 16",
        "article": null,
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yNzQzMA",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Кольцо Lissandra mini серебряное с белыми и черными цирконами",
          "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25419/2c98e000-831f-4750-97c9-e63d80d161ec.jpg",
          "uid": "3d350338a877d5834fb2bfee8880a61c0c5ec05a14ead6eb30e1d5b4800bba3b"
        },
        "attributes": {
          "94": "16"
        },
        "quantity": 10,
        "price": {
          "cents": 290000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 290000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 17",
        "article": null,
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yNzQzMQ",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Кольцо Lissandra mini серебряное с белыми и черными цирконами",
          "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25419/2c98e000-831f-4750-97c9-e63d80d161ec.jpg",
          "uid": "3d350338a877d5834fb2bfee8880a61c0c5ec05a14ead6eb30e1d5b4800bba3b"
        },
        "attributes": {
          "94": "17"
        },
        "quantity": 8,
        "price": {
          "cents": 290000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 290000,
          "currency_iso_code": "RUB"
        }
      }
    ],
    "images": [
      {
        "title": "Кольцо Lissandra mini серебряное с белыми и черными цирконами",
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25419/2c98e000-831f-4750-97c9-e63d80d161ec.jpg",
        "uid": "3d350338a877d5834fb2bfee8880a61c0c5ec05a14ead6eb30e1d5b4800bba3b"
      },
      {
        "title": "Кольцо Lissandra mini серебряное с белыми и черными цирконами",
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25574/4f9da1f9-d17d-4095-9a47-34280c0e0b56.jpg",
        "uid": "422457843ae38d3a2bcf3d686f98455fd964a58cec2d022b51b7d87d092e1f34"
      }
    ],
    "properties": [],
    "attributes": [
      {
        "property_id": 89,
        "type": "AttributeDictionary",
        "title": "Цвет покрытия",
        "value": "родий",
        "products_url": "http://wanna-be.ru/entities/44-rodiy"
      },
      {
        "property_id": 91,
        "type": "AttributeDictionary",
        "title": "Цвет вставок",
        "value": "белый + черный",
        "products_url": "http://wanna-be.ru/entities/31-belyy-chernyy"
      },
      {
        "property_id": 93,
        "type": "AttributeDictionary",
        "title": "Металл, проба",
        "value": "Серебро 925",
        "products_url": "http://wanna-be.ru/entities/37-serebro-925"
      },
      {
        "property_id": 99,
        "type": "AttributeDictionary",
        "title": "Вставки",
        "value": "куб. циркон",
        "products_url": "http://wanna-be.ru/entities/65-kub-tsirkon"
      }
    ],
    "custom_product_html": "",
    "text_blocks": [],
    "video_embed_html": null
  },
  "similarProducts": [
    {
      "id": 19378,
      "title": "Серьги Lissandra черненые",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/30819/ba646840-02b8-4e3a-93ff-d14bdc00f206.jpg",
        "width": 1500,
        "height": 1500
      },
      "second_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/7228/1e65337b-4906-4f19-a39e-221f1d079ed5.jpg",
        "width": 1500,
        "height": 1500
      },
      "public_url": "http://wanna-be.ru/products/19378-sergi-lissandra-chernenye",
      "short_details": null,
      "goods": [
        {
          "id": 16502,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 990000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 990000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 23597,
      "title": "Миникольцо Дорожка на цепочке с цирконами серебряное р",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25440/6905db1d-98cc-41c2-a4f7-f981b8e38bfa.jpg",
        "width": 486,
        "height": 486
      },
      "second_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/26334/4f94c5d1-9ddc-4439-945a-d1da1c8d38ae.jpg",
        "width": 1500,
        "height": 1500
      },
      "public_url": "http://wanna-be.ru/products/23597-minikoltso-dorozhka-na-tsepochke-s-tsirkonami-serebryanoe-r",
      "short_details": null,
      "goods": [
        {
          "id": 26648,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 26649,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 26650,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 26651,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 36176,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 290000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 30478,
      "title": "Кафф Jinx без камней черненый р",
      "is_sale": false,
      "has_ordering_goods": false,
      "is_label_new": false,
      "is_run_out": true,
      "is_sold": true,
      "index_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25531/5a19adc1-65cc-410d-ba2c-0b075e0f0582.jpg",
        "width": 1500,
        "height": 1500
      },
      "second_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25537/53ea4205-c358-44a5-b6a2-b76354237293.jpg",
        "width": 1500,
        "height": 1500
      },
      "public_url": "http://wanna-be.ru/products/30478-kaff-jinx-bez-kamney-chernenyy-r",
      "short_details": null,
      "goods": [
        {
          "id": 28131,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 129000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 129000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 33300,
      "title": "Серьги Lissandra серебряные р",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/30807/38c12aea-4ec4-4478-bc52-286d4ac7b315.jpg",
        "width": 1500,
        "height": 1500
      },
      "second_image": {
        "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28963/9a00bc7d-1391-4663-b61b-6d24c5aa56b6.jpg",
        "width": 1500,
        "height": 1500
      },
      "public_url": "http://wanna-be.ru/products/33300-sergi-lissandra-serebryanye-r",
      "short_details": null,
      "goods": [
        {
          "id": 29580,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 990000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 990000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    }
  ],
  "i18n": {
    "locale": "ru",
    "translations": {
      "vendor": {
        "not_published": "Магазин временно не работает",
        "made_in_kiiiosk": "Сделано на «Киоске»",
        "entities": {
          "product": "%{count} товар",
          "product_plural_2": "%{count} товара",
          "product_plural_5": "%{count} товаров"
        },
        "badges": {
          "new": "Новинка",
          "sale_percent": "SALE - %{percent}%",
          "not_available": "Не продается",
          "sale": "SALE",
          "sold": "Уточните наличие в наших магазинах"
        },
        "search": {
          "results_title": "Результаты поиска (%{count})",
          "nothing_found": "К сожалению, ничего не найдено."
        },
        "seconds_count": "%{count} секунду",
        "seconds_count_plural_2": "%{count} секунды",
        "seconds_count_plural_5": "%{count} секунд",
        "errors": {
          "cart": {
            "empty": "В корзине нет товаров"
          },
          "coupon": {
            "not_found": "Несуществующий промокод %{code}",
            "expired": "Промокод просрочен %{code}"
          },
          "order": {
            "invalid_form": "Закакз еще не принят, исправьте ошибки в форме"
          }
        },
        "placeholders": {
          "coupon": "Промо-код (если есть)",
          "search": "Поиск"
        },
        "alerts": {
          "confirm": "Точно очистить?"
        },
        "flashes": {
          "good_added_to_basket": "Товар \"%{title}\" добавлен в корзину"
        },
        "mails": {
          "signature": "С уважением, интернет-магазин \"%{name}\""
        },
        "auto_menu_items": {
          "blog": "Блог"
        },
        "top_banner": {
          "default_content": "Мы открылись!"
        },
        "order": {
          "fields": {
            "phone": "Телефон",
            "name": "Имя Отчество Фамилия",
            "email": "Email",
            "city_title": "Город доставки",
            "address": "Адрес доставки",
            "comment": "Комментарий",
            "coupon_code": "Промокод"
          },
          "placeholders": {
            "city_title": "Москва",
            "phone": "Например, +7 913 123 32 10",
            "name": "Ф.И.О.",
            "address": "Например, Академика Вавилова 12-10",
            "comment": "О чем нам нужно знать",
            "email": "Email"
          },
          "submit": "Оформить заказ",
          "pickup_address": "Адрес самовывоза:",
          "title": "Заказ №%{number}",
          "payment_type": "Способ оплаты: %{title}",
          "delivery_type": "Способ доставки: %{title}",
          "free_delivery_text_html": "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "checkout_free_delivery_text_html": "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "go_back": "Вернуться назад",
          "next": "Продолжить",
          "delivery_tracking_id": "Трекинг-номер доставки: %{number}",
          "check_state": "Проверить статус доставки",
          "public_offer_accepted_html": "Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
          "created": {
            "title": "Спасибо за заказ",
            "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n"
          },
          "new": {
            "delivery_title": "Выберите тип доставки.",
            "payment_title": "Способы оплаты",
            "contacts_title": "Введите данные",
            "sum": "на сумму"
          },
          "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.",
          "redirecting": "Переправляю на сайт оплаты",
          "go_to_payment": "Перейти к оплате",
          "continue_shopping": "Продолжить покупки",
          "contents": "Состав заказа:",
          "delivery_price": "Стоимость доставки",
          "pay": "Оплатить"
        },
        "blog": {
          "read_more": "Читать далее.."
        },
        "notice": {
          "catalog_filter": {
            "selected_products": "Выбрано вариантов",
            "show_products": "Показать"
          }
        },
        "coupon": {
          "discount": "Скидка - %{discount}",
          "invalid": "Купон \"%{value}\" НЕ действующий",
          "checking": "Проверяю купон..",
          "error": "Ошибка при проверке купона. Попробуйте еще раз"
        },
        "cart": {
          "basket_button": "Корзина",
          "amount": "Количество",
          "overall": "Итого:",
          "title": "Корзина",
          "clear": "Очистить корзину",
          "not_available": "Больше не продается",
          "empty": "Пока тут ничего нет"
        },
        "wishlist": {
          "add_item": "Добавить в список желаний",
          "wishlist_button": "Список желаний",
          "private_title": "Ваш список желаний",
          "foreign_title": "Чей-то список желаний",
          "empty": "Пока тут ничего нет"
        },
        "packaging": {
          "add": "Добавить",
          "add_gift_package": "Добавить к заказу",
          "no_package": "Не добавлять"
        },
        "payment": {
          "w1": {
            "failure": {
              "title": "Оплата не прошла",
              "desc": "Оплата заказа не была произведена"
            },
            "success": {
              "title": "Спасибо за заказ",
              "desc": "Оплата заказа была произведена"
            }
          }
        },
        "category": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "dictionary_entity": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "similar_product": {
          "title": "С этим товаром покупают также"
        },
        "product": {
          "title": "Товар",
          "blank_price": "Цена неизвестна",
          "run_out": "Нет в наличии",
          "not_available": "Уточните в магазине",
          "available": "Можно купить",
          "sold_out_message_html": "&laquo;%{title}&raquo; сейчас не продается",
          "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.",
          "category_title": "Категория",
          "show_other_products": "Посмотреть другие товары",
          "show_all": "Показать все"
        },
        "properties": {
          "empty": "Нет характеристик для вывода"
        },
        "property": {
          "unknown_type": "Неизвестный тип характеристики",
          "defaults": {
            "size": "Размер",
            "color": "Цвет"
          }
        },
        "pages": {
          "titles": {
            "cart": "Корзина",
            "order": "Оформление заказа",
            "payment": "Оплата",
            "payment_success": "Успешная оплата",
            "payment_error": "Ошибка оплаты"
          }
        },
        "filter": {
          "availability": "Доступность",
          "price_range": "Ценовой диапазон",
          "selected_options": {
            "availability": "Доступность",
            "price_range": "Цена от %{from} до %{to} %{currency}"
          },
          "selected_availability": {
            "all": "Все",
            "available": "В наличии",
            "run_out": "Под заказ",
            "sale": "Распродажа",
            "unknown": "unknown"
          }
        },
        "button": {
          "to_cart": "В корзину",
          "select_good": "Выберите характеристику",
          "go_wishlist": "Перейти в \"Список желаний\"",
          "to_wishlist": "Хочу!",
          "already": "Уже в корзине",
          "disable_with": {
            "sending": "Отправляем...",
            "saving": "Сохраняем...",
            "waiting": "Подождите...",
            "adding": "Добавляем..."
          }
        },
        "products": {
          "nothing_found_by_criteria": "По данным критериям ничего не найдено"
        },
        "client": {
          "auth": "Личный кабинет",
          "no_account": "Нет аккаунта?",
          "logged_in_with": "Вы уже авторизованы под именем<br /> <b>%{name}</b>.",
          "continue_logged": "Продолжить под этим именем..",
          "create_account": "Создать",
          "logout": "Выйти",
          "cabinet": {
            "title": "Личный кабинет",
            "button": "Кабинет",
            "create": "Создаем личный кабинет",
            "send_pin_code": "Выслать пин-код",
            "disable_with": "Высылаем..."
          }
        },
        "money": {
          "unknown_iso_code": "Неизвестный тип валюты %{isoCode}"
        },
        "add_gift_package": "Добавить подарочную коробку",
        "no_package": "Без упаковки"
      }
    }
  },
  "formAuthenticity": {
    "token": "U9pqrQGs/+7Ht9qSAjOLpsN18IL6EJyPNSfJu45oLT4=",
    "field": "authenticity_token"
  },
  "isWishlisted": false,
  "hasWishlist": true,
  "wishlistUrl": "http://wanna-be.ru/wishlist",
  "addWishlistUrl": "http://wanna-be.ru/wishlist/items"
};

export default provideTranslations(ProductCard);