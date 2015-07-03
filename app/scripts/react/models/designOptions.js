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
  textColor: {
    type: designTypes.DESIGN_COLOR_TYPE,
    name: 'designoption-textcolor',
    items: [{
      title: 'Оранжевый',
      value: '#894c00'
    }, {
      title: 'Светло-жёлтый',
      value: '#fff2a6'
    }, {
      title: 'Красный',
      value: '#720000'
    }, {
      title: 'Коричневый',
      value: '#513100'
    }, {
      title: 'Жёлтый',
      value: '#ffd46c'
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
  columns: {
    type: designTypes.DESIGN_ANY_TYPE,
    name: 'designoption-columns',
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
    }, {
      title: '5 рядов',
      value: 5
    }]
  },
  photoOnTop: {
    type: designTypes.DESIGN_CHECKBOX_TYPE,
    name: 'designoption-photo-on-top'
  },
  pageBg: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-pagebg'
  },
  logo: {
    type: designTypes.DESIGN_ATTACHMENT_TYPE,
    name: 'designoption-logo'
  },
  feedTransparency: {
    type: designTypes.DESIGN_SLIDER_TYPE,
    name: 'designoption-feed-transparency',
    from: 0,
    to: 100
  }
}