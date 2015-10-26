export default {
  vendor: {
    badges: {
      new: 'Новинка',
      sale_percent: 'SALE - %{percent}%',
      not_available: 'Не продаётся',
      sale: 'SALE',
      sold: 'Продано',
    },
    button: {
      to_cart: 'В корзину',
      select_good: 'Выберите характеристику', // Новое
      disable_with: {
        adding: 'Добавляем...',
      },
    },
    // Переносим из https://github.com/BrandyMint/merchantly/blob/develop/app/assets/javascripts/vendor/i18n/translations.js
    js: {
      coupon: {
        checking: 'Проверяю купон..',
        discount: 'Скидка - %{discount}',
        error: 'Ошибка при проверке купона. Попробуйте еще раз',
        invalid: 'Купон "%{value}" НЕ действующий',
      },
    },
    product: {
      not_available: 'Не продаётся',
      blank_price: 'Цена неизвестна', // https://github.com/BrandyMint/merchantly/blob/develop/config/locales/decorators.ru.yml#L13
    },
    properties: {
      empty: 'Нет характеристик для вывода', // Новое
    },
    property: {
      unknown_type: 'Неизвестный тип характеристики', // Новое
    },
    similar_product: {
      title: 'С этим товаром покупают также',
    },
  },
}