const baseSimilarProducts = [];
const baseProduct = {
  id: 4273,
  global_id: 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQyNzM',
  title: 'Миникольцо Полоски без камней черненое',
  article: 'MR005-02',
  description: '<p></p>',
  main_category: {
    id: 628,
    name: 'Миникольцо',
    is_root: false,
    public_url: 'http://wannabe.vagrant.dev:3000/categories/628-koltsa-minikoltso',
    parent: {
      id: 636,
      name: 'Кольца',
      is_root: false,
      public_url: 'http://wannabe.vagrant.dev:3000/categories/636-koltsa',
      parent: {
        id: 612,
        name: 'Корневая категория',
        is_root: true,
        public_url: 'http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya',
        parent: null
      }
    }
  },
  categories: [
    {
      id: 628,
      name: 'Миникольцо',
      is_root: false,
      public_url: 'http://wannabe.vagrant.dev:3000/categories/628-koltsa-minikoltso',
      parent: {
        id: 636,
        name: 'Кольца',
        is_root: false,
        public_url: 'http://wannabe.vagrant.dev:3000/categories/636-koltsa',
        parent: {
          id: 612,
          name: 'Корневая категория',
          is_root: true,
          public_url: 'http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya',
          parent: null
        }
      }
    },
    {
      id: 1524,
      name: 'Главная страница',
      is_root: false,
      public_url: 'http://wannabe.vagrant.dev:3000/categories/1524-glavnaya-stranitsa',
      parent: {
        id: 612,
        name: 'Корневая категория',
        is_root: true,
        public_url: 'http://wannabe.vagrant.dev:3000/categories/612-kornevaya-kategoriya',
        parent: null
      }
    }
  ],
  images: [
    {
      title: 'Миникольцо Полоски без камней черненое',
      url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5300/image.png'
    },
    {
      title: 'Миникольцо Полоски без камней черненое',
      url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/26264/450123b4-7c9e-4ae9-a04e-05fda504d0a2.jpg'
    }
  ],
  attributes: [],
  goods: [],
  text_blocks: [],
};

const allAttributeTypes = [
  {
    property_id: 89,
    type: 'AttributeDictionary',
    title: 'Цвет покрытия',
    value: 'чернение',
    products_path: '/entities/46-chernenie'
  },
  {
    property_id: 2378,
    type: 'AttributeLink',
    title: 'Ссылочка',
    value: 'http://google.ru',
    products_path: null
  },
  {
    property_id: 2379,
    type: "AttributeFile",
    title: "Файлик",
    value: {
      extension: '.png',
      filename: '59eb28c9-fa4e-4062-b1d8-4582b9dc6c40.png',
      size: 38144,
      url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/af/2379/59eb28c9-fa4e-4062-b1d8-4582b9dc6c40.png'
    },
    products_path: null
  }
];

export const productCard = {
  product: baseProduct,
  similarProducts: baseSimilarProducts,
}

export const productCardWithAllAttributeTypes = {
  ...productCard,
  product: {
    ...productCard.product,
    attributes: allAttributeTypes,
  }
}