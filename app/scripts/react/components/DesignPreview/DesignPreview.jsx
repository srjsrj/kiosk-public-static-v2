import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { fromJS } from 'immutable';
import jss from 'jss';
import assign from 'react/lib/Object.assign';
import tinycolor from 'tinycolor2';
import connectToRedux from '../HoC/connectToRedux';

const _rules = {
  pageBgColor(value) {
    return {
      '.b-page': {
        'background-color': value
      }
    };
  },
  pageBgUrl(value) {
    return {
      '.b-page': {
        'background-image': value ? `url("${value}")` : 'none'
      }
    };
  },
  feedBgColor(value) {
    return {
      dep: 'feedTransparency',
      rule(depValue) {
        return {
          '.b-page__content__inner': {
            'background-color': tinycolor(value).setAlpha(depValue).toRgbString()
          }
        }
      }
    };
  },
  fontColor(value) {
    return {
      '.b-page': {
        'color': value
      }
    };
  },
  logoUrl(value) {
    return {
      '.b-logo__img': {
        'content': value ? `url("${value}")` : 'none'
      }
    };
  }
};
const _states = {
  fontFamily: 'b-page_ff',
  fontSize: 'b-page_fs'
};

@connect((state) => ({
  design: state.design
}))
class DesignPreview {
  static propTypes = {
    design: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.sheet = jss.createStyleSheet({}, { named: false }).attach();
    this.sheet.element.setAttribute('design-settings-sheet', '');
  }
  componentWillUpdate(nextProps) {
    this.apply(nextProps.design.get('current'));
  }
  componentWillUnmount() {
    this.sheet.detach();
    this.sheet = null;
  }
  render() {
    return null;
  }
  apply(design) {
    let states = {},
        cssRules = fromJS({}),
        page = this.getElements().page;

    design.forEach((value, property) => {
      // Filling list of cssRules
      const rule = _rules[property];

      if (rule) {
        let cssRule = rule(value);

        if (cssRule.dep) {
          let depValue = design.get(cssRule.dep);
          cssRules = cssRules.mergeDeep(cssRule.rule(depValue));
        } else {
          cssRules = cssRules.mergeDeep(cssRule);
        }
      };

      // Filling list of page classes
      const state = _states[property];

      if (state) {
        states[property] = {
          key: state,
          value: value
        };
      }
    });

    let pageClasses = page.className.split(' ').filter((className) => {
      for (let key in states) {
        if (states.hasOwnProperty(key)) {
          if (className.indexOf(states[key].key) === 0) return false;
        }
      }
      return true;
    });

    for (let key in states) {
      if (states.hasOwnProperty(key)) {
        const newClass = _states[key] + '-' + states[key].value;
        pageClasses.push(newClass);
      }
    }

    this.sheet.addRules(cssRules.toJS());
    page.className = pageClasses.join(' ').trim();
  }
  getElements() {
    return {
      page: document.body || document.getElementsByTagName('body')[0]
    };
  }
}

export default connectToRedux(DesignPreview);






// _ = require 'lodash'
// jss = require 'jss'

// sheet = jss.createStyleSheet({}, named: false).attach()
// sheet.element.setAttribute 'design-settings-sheet', ''

// DesignPreviewService =
//   page: document.body
//   pageCover: document.querySelector '.page-cover'
//   feed: document.querySelector '.content-area__bg'

//   states:
//     headerFont:          'designtlog-headerfont'
//     headerSize:          'designtlog-headersize'
//     headerColor:         'designtlog-headercolor'
//     backgroundColor:     'designtlog-bgcolor'
//     backgroundAlignment: 'designtlog-bgalignment'
//     feedBackgroundColor: 'designtlog-feedbgcolor'
//     feedFont:            'designtlog-feedfont'
//     feedFontColor:       'designtlog-feedcolor'

//   switchableStates:
//     backgroundImageEnabled: 'designtlog-bgimage-none'

//   classNames:
//     headerFont: [
//       {
//         value: 'proximanova'
//         className: 'proximanova'
//       }
//       {
//         value: 'notoserif'
//         className: 'notoserif'
//       }
//       {
//         value: 'comfortaa'
//         className: 'comfortaa'
//       }
//       {
//         value: 'airbornepilot'
//         className: 'airbornepilot'
//       }
//       {
//         value: 'amaranth'
//         className: 'amaranth'
//       }
//       {
//         value: 'beermoney'
//         className: 'beermoney'
//       }
//       {
//         value: 'dancingscript'
//         className: 'dancingscript'
//       }
//       {
//         value: 'greatvibes'
//         className: 'greatvibes'
//       }
//       {
//         value: 'veles'
//         className: 'veles'
//       }
//       {
//         value: 'zion'
//         className: 'zion'
//       }
//       {
//         value: 'nautilus'
//         className: 'nautilus'
//       }
//       {
//         value: 'ospdin'
//         className: 'ospdin'
//       }
//       {
//         value: 'pecita'
//         className: 'pecita'
//       }
//       {
//         value: 'poetsen'
//         className: 'poetsen'
//       }
//       {
//         value: 'yessireebob'
//         className: 'yessireebob'
//       }
//     ]
//     headerSize: [
//       {
//         value: 'small'
//         className: 'small'
//       }
//       {
//         value: 'middle'
//         className: 'middle'
//       }
//       {
//         value: 'large'
//         className: 'large'
//       }
//     ]
//     headerColor: [
//       {
//         value: '#ffffff'
//         className: 'white'
//       }
//       {
//         value: '#000000'
//         className: 'black'
//       }
//       {
//         value: ':ANY:'
//         className: 'custom'
//       }
//       {
//         value: '#2ac67e'
//         className: 'shamrock'
//       }
//       {
//         value: '#e74c3c'
//         className: 'cinnabar'
//       }
//       {
//         value: '#6c7a89'
//         className: 'bluegray'
//       }
//       {
//         value: '#38434e'
//         className: 'madison'
//       }
//     ]
//     backgroundColor: [
//       {
//         value: '#ffffff'
//         className: 'white'
//       }
//       {
//         value: '#000000'
//         className: 'black'
//       }
//       {
//         value: ':ANY:'
//         className: 'custom'
//       }
//       {
//         value: '#e74c3c'
//         className: 'cinnabar'
//       }
//       {
//         value: '#c6c9cc'
//         className: 'silversand'
//       }
//       {
//         value: '#6c7a89'
//         className: 'bluegray'
//       }
//     ]
//     backgroundAlignment: [
//       {
//         value: 'justify'
//         className: 'justify'
//       }
//       {
//         value: 'center'
//         className: 'center'
//       }
//     ]
//     feedBackgroundColor: [
//       {
//         value: '#ffffff'
//         className: 'white'
//       }
//       {
//         value: '#000000'
//         className: 'black'
//       }
//       {
//         value: ':ANY:'
//         className: 'custom'
//       }
//       {
//         value: '#e74c3c'
//         className: 'cinnabar'
//       }
//       {
//         value: '#c6c9cc'
//         className: 'silversand'
//       }
//       {
//         value: '#6c7a89'
//         className: 'bluegray'
//       }
//     ]
//     feedFont: [
//       {
//         value: 'ptsans'
//         className: 'ptsans'
//       }
//       {
//         value: 'ptserif'
//         className: 'ptserif'
//       }
//       {
//         value: 'roboto'
//         className: 'roboto'
//       }
//       {
//         value: 'lora'
//         className: 'lora'
//       }
//       {
//         value: 'philosopher'
//         className: 'philosopher'
//       }
//       {
//         value: 'ptmono'
//         className: 'ptmono'
//       }
//       {
//         value: 'berenisadfpro'
//         className: 'berenisadfpro'
//       }
//       {
//         value: 'djserif'
//         className: 'djserif'
//       }
//       {
//         value: 'heuristica'
//         className: 'heuristica'
//       }
//       {
//         value: 'permian'
//         className: 'permian'
//       }
//       {
//         value: 'robotoslab'
//         className: 'robotoslab'
//       }
//       {
//         value: 'clearsans'
//         className: 'clearsans'
//       }
//     ]
//     feedFontColor: [
//       {
//         value: '#ffffff'
//         className: 'white'
//       }
//       {
//         value: '#000000'
//         className: 'black'
//       }
//       {
//         value: '#c6c9cc'
//         className: 'silversand'
//       }
//       {
//         value: '#6c7a89'
//         className: 'bluegray'
//       }
//       {
//         value: '#38434e'
//         className: 'madison'
//       }
//       {
//         value: ':ANY:'
//         className: 'custom'
//       }
//     ]

//   rules:
//     headerColor: (value) ->
//       '.design-settings__option--headercolor .design-settings__state-i':
//         'border-color': value
//         'background-color': value
//       '.hero':
//         'color': value

//     backgroundColor: (value) ->
//       '.design-settings__option--bgcolor .design-settings__state-i':
//         'border-color': value
//         'background-color': value
//       '.page-cover':
//         'background-color': value

//     feedBackgroundColor: (value) ->
//       '.design-settings__option--feedbgcolor .design-settings__state-i':
//         'border-color': value
//         'background-color': value

//       '.content-area__bg':
//         'background-color': value

//     feedFontColor: (value) ->
//       '.design-settings__option--feedcolor .design-settings__state-i':
//         'border-color': value
//         'background-color': value

//       '.page-body':
//         'color': value

//   apply: (design) ->
//     states = {}
//     switchableStates = {}

//     # Распределяем полученные значения по типам
//     for state, value of design
//       if @states[state] then states[state] = value
//       if @switchableStates[state] then switchableStates[state] = value

//     # Получаем список классов страницы отфильтровывая те классы, значения которых
//     # изменились
//     classes = @page.className.split(' ').filter (className) =>
//       for k of states
//         return false if className.indexOf(@states[k]) == 0

//       for m of switchableStates
//         return false if @switchableStates[m] is className
//       true

//     # Добавляем классы с новыми значениями в массив классов
//     for state, value of states
//       propertyClassName = @getPropertyClassName state, value
//       newClass = @states[state] + '-' + propertyClassName
//       classes.push newClass

//     # Добавляем "переключаемые" классы, если они удовлетворяют условию
//     for state, value of switchableStates
//       switch state
//         when 'backgroundImageEnabled' # Здесь перечисляются все переключаемые классы
//           # Классы будут устанавливаться только если значение false
//           unless value
//             newClass = @switchableStates[state]
//             classes.push newClass

//     # Устанавливаем кастомные значения через <style>
//     for state, value of states
//       propertyClassName = @getPropertyClassName state, value
//       @setStyles state, value if propertyClassName is 'custom'

//     if design.backgroundImageUrl
//       @pageCover.style.backgroundImage = 'url("' + design.backgroundImageUrl + '")'

//     if _.isNumber design.feedOpacity
//       @feed.style.opacity = design.feedOpacity

//     @page.className = _.trim classes.join ' '

//   getPropertyClassName: (option, value) ->
//     propertyAny = null

//     return throw new Error("Неизвестная опция #{option}") unless @classNames[option]

//     for property in @classNames[option]
//       if property.value is ':ANY:' then propertyAny = property
//       if property.value is value then return property.className

//     return propertyAny.className if propertyAny?.className
//     null

//   setStyles: (option, value) ->
//     rule = @rules[option]

//     return throw new Error("Неизвестная опция #{option}") unless rule

//     sheet.addRules rule(value)

// module.exports = DesignPreviewService