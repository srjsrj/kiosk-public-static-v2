import React, { PropTypes } from 'react';
import Immutable from 'immutable';
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
    value: PropTypes.instanceOf(Immutable.Map).isRequired,
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
    if (this.props.value && this.props.value.get('url')) {
      return (
        <div className="design-settings__attach-box">
          <span onClick={::this.handleDelete}>
            <i className="design-settings__attach-delete" />
          </span>
          <img src={this.props.value.get('url')} className="design-settings__attach-img" />
        </div>
      );
    }
  }
  getSelectText() {
    const { value } = this.props;
    return (value.get('id') || value.get('url'))
      ? 'Выбрать другой файл...'
      : 'Выбрать файл...'
  }
  handleChange(e) {
    this.props.onChange(e.target.files[0]);
  }
  handleDelete() {
    this.props.onChange(null);
  }
}

// <div class="design-settings__attach">
//   <div class="design-settings__attach-box">
//     <i class="design-settings__attach-delete"></i>
//     <img class="design-settings__attach-img" src="images/wannabe/logo.png" alt="">
//   </div>
//   <!-- До загрузки -->
//   <!-- %label.select-file{for: 'designoption-logo'} Выбрать файл... -->
//   <!--   %input#designoption-logo.select-file__input{type: 'file'} -->
//   <!-- end До загрузки -->
//   <!-- Когда загрузили -->
//   <label class="select-file" for="designoption-logo">Выбрать другой файл...
//     <input class="select-file__input" id="designoption-logo" type="file">
//   </label>
//   <!-- end Когда загрузили -->
// </div>


// <div class="design-settings__attach design-settings__attach--image">
//   <div class="design-settings__attach-box">
//     <i class="design-settings__attach-delete"></i>
//     <img class="design-settings__attach-img" src="http://eandys.ru/image.php?di=PZUV" alt="">
//   </div>
  // <label class="select-file select-file--icon select-file--icon-pencil" for="designoption-pagebg" title="Выбрать файл">
  //   <input class="select-file__input" id="designoption-pagebg" type="file">
  // </label>
// </div>


// <div class="design-settings__attach">
//   <div class="design-settings__attach-box">
//     <i class="design-settings__attach-delete"></i>
//     <img class="design-settings__attach-img" src="images/wannabe/logo.png" alt="">
//   </div>
//   <!-- До загрузки -->
//   <!-- %label.select-file{for: 'designoption-logo'} Выбрать файл... -->
//   <!--   %input#designoption-logo.select-file__input{type: 'file'} -->
//   <!-- end До загрузки -->
//   <!-- Когда загрузили -->
//   <label class="select-file" for="designoption-logo">Выбрать другой файл...
//     <input class="select-file__input" id="designoption-logo" type="file">
//   </label>
//   <!-- end Когда загрузили -->
// </div>