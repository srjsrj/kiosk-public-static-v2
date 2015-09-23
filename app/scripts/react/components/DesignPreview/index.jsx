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
            'background-color': tinycolor(value).setAlpha(1 - depValue).toRgbString()
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
  }
};
const _states = {
  fontFamily: 'b-page_ff',
  fontSize: 'b-page_fs',
  productsInRow: 'b-page_cols'
};
const _switchableStates = {
  productLayoutBigpic: 'b-page_layout-bigpic'
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
    const states = this.getStates(design, _states);
    const switchableStates = this.getStates(design, _switchableStates);
    const cssRules = this.getRules(design);
    const pageClasses = this.getPageClasses(design, {...states, ...switchableStates});
    const page = this.getElements().page;

    this.sheet.addRules(cssRules);
    page.className = pageClasses.join(' ');
  }
  getStates(design, states) {
    return design.reduce((previous, value, property) => {
      const state = states[property];

      if (state) {
        previous[state] = value;
      }

      return previous;
    }, {});
  }
  getRules(design) {
    return design.reduce((previous, value, property) => {
      const rule = _rules[property];

      if (rule) {
        const cssRule = rule(value);

        if (cssRule.dep) {
          const depValue = design.get(cssRule.dep);
          previous = previous.mergeDeep(cssRule.rule(depValue));
        } else {
          previous = previous.mergeDeep(cssRule);
        }
      }

      return previous;
    }, fromJS({})).toJS();
  }
  getPageClasses(design, states) {
    const page = this.getElements().page;

    let classes = page.className.split(' ').filter((className) => {
      for (let key in states) {
        if (states.hasOwnProperty(key)) {
          if (className.indexOf(key) === 0) return false;
        }
      }
      return true;
    });

    Object.keys(states).reduce(function(previous, key) {
      if (states.hasOwnProperty(key)) {
        const value = states[key];
        // If value is true or can be converted to boolean true
        if (value) {
          previous.push(value !== true ? key + '-' + value : key);
        }
      }
      return previous;
    }, classes);

    return classes;
  }
  getElements() {
    return {
      page: document.body || document.getElementsByTagName('body')[0]
    };
  }
}

export default connectToRedux(DesignPreview);