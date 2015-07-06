import * as designTypes from '../constants/designTypes';

export default {
  pageBgColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-pagebgcolor',
    items: [{
      title: 'Белый',
      value: '#ffffff'
    }, {
      title: 'Чёрный',
      value: '#000000'
    }, {
      title: 'Оранжевый',
      value: '#e74c3c'
    }, {
      title: 'Серый',
      value: '#6c7a89'
    }, {
      title: 'Бежевый',
      value: '#f4d3c4'
    }]
  },
  fontColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-fontcolor',
    items: [{
      title: 'Белый',
      value: '#ffffff'
    }, {
      title: 'Чёрный',
      value: '#000000'
    }, {
      title: 'Салатовый',
      value: '#2ac67e'
    }, {
      title: 'Красный',
      value: '#e74c3c'
    }, {
      title: 'Серый',
      value: '#c6c9cc'
    }]
  },
  activeColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-activecolor',
    items: [{
      title: 'Светло-зелёный',
      value: '#264c35'
    }, {
      title: 'Светло-оранжевый',
      value: '#c3a96c'
    }, {
      title: 'Красный',
      value: '#fa3c58'
    }, {
      title: 'Бордовый',
      value: '#772d3c'
    }, {
      title: 'Чёрный',
      value: '#1a0f17'
    }]
  },
  feedBgColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-feedbgcolor',
    items: [{
      title: 'Белый',
      value: '#ffffff'
    }, {
      title: 'Чёрный',
      value: '#000000'
    }, {
      title: 'Салатовый',
      value: '#2ac67e'
    }, {
      title: 'Оранжевый',
      value: '#e74c3c'
    }, {
      title: 'Серый',
      value: '#c6c9cc'
    }]
  },
  fontFamily: {
    type: designTypes.DESIGN_FONT_TYPE,
    name: 'designoption-fontfamily',
    items: [{
      title: 'Helvetica',
      value: 'helvetica'
    }, {
      title: 'PT Serif',
      value: 'ptserif'
    }, {
      title: 'PT Sans',
      value: 'ptsans'
    }, {
      title: 'Verdana',
      value: 'verdana'
    }, {
      title: 'Courier',
      value: 'courier'
    }]
  },
  fontSize: {
    type: designTypes.DESIGN_FONT_SIZE_TYPE,
    name: 'designoption-fontsize',
    items: [{
      title: 'Маленький',
      value: 'sm'
    }, {
      title: 'Средний',
      value: 'md'
    }, {
      title: 'Большой',
      value: 'lg'
    }]
  },
  productsInRow: {
    type: designTypes.DESIGN_ANY_TYPE,
    name: 'designoption-productsinrow',
    items: [{
      title: '1 ряд',
      value: 1
    }, {
      title: '2 ряда',
      value: 2
    }, {
      title: '3 ряда',
      value: 3
    }, {
      title: '4 ряда',
      value: 4
    }]
  },
  productLayoutBigpic: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-productbigpic'
  },
  pageBgUrl: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-pagebgurl'
  },
  logoUrl: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-logourl'
  },
  feedTransparency: {
    type: designTypes.DESIGN_SLIDER_TYPE,
    name: 'designoption-feedtransparency',
    from: 0,
    to: 1,
    step: .01
  }
}