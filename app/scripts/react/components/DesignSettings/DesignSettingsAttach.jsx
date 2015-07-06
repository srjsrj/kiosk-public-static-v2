import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import classNames from 'classnames';

function selectFile(name, text, onChange) {
  return class SelectFile {
    static propTypes = {
      withText: PropTypes.bool,
      className: PropTypes.string
    }
    render() {
      return (
        <label htmlFor={name}
               className={classNames('select-file', this.props.className)}>
          {this.props.withText && text}
          <input type="file"
                 accept="image/*"
                 id={name}
                 className="select-file__input"
                 onChange={onChange} />
        </label>
      );
    }
  }
}

export default class DesignSettingsAttach {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.func,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { name, children } = this.props;
    const selectText = this.getSelectText();

    return (
      <div className={classNames('design-settings__attach', this.props.className)}>
        {this.renderBox()}
        {children && children(selectFile(name, selectText, ::this.handleChange))}
      </div>
    );
  }
  renderBox() {
    if (this.props.value) {
      return (
        <div className="design-settings__attach-box">
          <span onClick={::this.handleDelete}>
            <i className="design-settings__attach-delete" />
          </span>
          <img src={this.props.value} className="design-settings__attach-img" />
        </div>
      );
    }
  }
  getSelectText() {
    const { value } = this.props;
    return value ? 'Выбрать другой файл...' : 'Выбрать файл...'
  }
  handleChange(e) {
    this.props.onChange(e.target.files[0]);
  }
  handleDelete() {
    this.props.onChange(null);
  }
}