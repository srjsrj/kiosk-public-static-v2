import {
  DESIGN_ANY_TYPE,
  DESIGN_FONT_TYPE,
  DESIGN_COLOR_TYPE,
  DESIGN_SLIDER_TYPE,
  DESIGN_CHECKBOX_TYPE,
  DESIGN_FONT_SIZE_TYPE,
  DESIGN_ATTACHMENT_TYPE
} from '../constants/designTypes';

const initialState = {
  current: {},
  options: {
    pageColor: {
      type: DESIGN_COLOR_TYPE,
      name: 'designoption-pagecolor',
      items: [{
        title: 'Красный',
        value: '#bf443f'
      }, {
        title: 'Синий',
        value: '#569a9f'
      }, {
        title: 'Бирюзовый',
        value: '#4f617d'
      }, {
        title: 'Бежевый',
        value: '#f4d3c4'
      }, {
        title: 'Серый',
        value: '#d4c3c9'
      }]
    },
    textColor: {
      type: DESIGN_COLOR_TYPE,
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
      type: DESIGN_COLOR_TYPE,
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
      type: DESIGN_FONT_TYPE,
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
      type: DESIGN_FONT_SIZE_TYPE,
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
      type: DESIGN_ANY_TYPE,
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
      type: DESIGN_CHECKBOX_TYPE,
      name: 'designoption-photo-on-top'
    },
    pageBg: {
      type: DESIGN_ATTACHMENT_TYPE,
      name: 'designoption-pagebg',
      attachment: {
        id: null,
        url: 'http://eandys.ru/image.php?di=PZUV'
      }
    },
    logo: {
      type: DESIGN_ATTACHMENT_TYPE,
      name: 'designoption-logo',
      attachment: {
        id: null,
        url: '/images/cc/logo.png'
      }
    },
    feedTransparency: {
      type: DESIGN_SLIDER_TYPE,
      name: 'designoption-feed-transparency',
      value: 50,
      from: 0,
      to: 100
    }
  },
  unsavedFields: {}
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}