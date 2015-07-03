import React, { PropTypes } from 'react';
import { List } from 'immutable';
import classNames from 'classnames';
import tinycolor from 'tinycolor2';
import * as designTypes from '../../constants/designTypes';

export default class DesignSettingsRadioList {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.instanceOf(List).isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const listItems = this.props.items.map(::this.renderItem);
    return <span>{listItems}</span>;
  }
  renderItem(item) {
    return <DesignSettingsRadioListItem {...this.getItemProps(item)} />;
  }
  getItemProps(item) {
    const value = item.get('value');
    const props = {
      name: this.props.name,
      checked: this.props.value === value,
      onChange: this.props.onChange.bind(this, value),
      key: this.props.name + '-' + value
    };

    switch(this.props.type) {
      case designTypes.DESIGN_COLOR_TYPE:
        return {
          ...props,
          style: { backgroundColor: value },
          className: classNames('radiobtn--circle', {
            'radiobtn--light': tinycolor(value).isLight()
          })
        }
      case designTypes.DESIGN_FONT_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--font-' + value,
          text: 'Aa'
        }
      case designTypes.DESIGN_FONT_SIZE_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--fontsize-' + value,
          text: 'Aa'
        }
      default:
        return {
          ...props,
          text: item.get('value'),
          className: 'radiobtn--circle'
        }
    }
  }
}

class DesignSettingsRadioListItem {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    checked: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <label className={classNames('radiobtn', this.props.className)}>
        <input type="radio"
               name={this.props.name}
               checked={this.props.checked}
               className="radiobtn__input"
               onChange={this.props.onChange} />
        <span className="radiobtn__ind" style={this.props.style}>
          {this.props.text}
        </span>
      </label>
    );
  }
}