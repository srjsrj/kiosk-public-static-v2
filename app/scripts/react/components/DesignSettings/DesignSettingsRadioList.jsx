import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {
  DESIGN_FONT_TYPE,
  DESIGN_COLOR_TYPE,
  DESIGN_FONT_SIZE_TYPE
} from '../../constants/designTypes';

export default class DesignSettingsRadioList {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const listItems = this.props.items.map(::this.renderItem);
    return <span>{listItems}</span>;
  }
  renderItem(item) {
    return <DesignSettingsRadioListItem {...this.getItemProps(item)} />;
  }
  getItemProps(item) {
    let props = {
      name: this.props.name,
      key: this.props.name + '-' + item.value
    };

    switch(this.props.type) {
      case DESIGN_COLOR_TYPE:
        return {
          ...props,
          style: { backgroundColor: item.value },
          className: 'radiobtn--circle'
        }
      case DESIGN_FONT_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--font-' + item.value,
          text: 'Aa'
        }
      case DESIGN_FONT_SIZE_TYPE:
        return {
          ...props,
          className: 'radiobtn--font radiobtn--fontsize-' + item.value,
          text: 'Aa'
        }
      default:
        return {
          ...props,
          text: item.value,
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
    className: PropTypes.string.isRequired
  }
  render() {
    return (
      <label className={classNames('radiobtn', this.props.className)}>
        <input className="radiobtn__input" type="radio" name={this.props.name} />
        <span className="radiobtn__ind" style={this.props.style}>
          {this.props.text}
        </span>
      </label>
    );
  }
}