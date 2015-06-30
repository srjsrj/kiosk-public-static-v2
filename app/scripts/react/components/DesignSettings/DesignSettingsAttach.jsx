import React, { PropTypes } from 'react';
import classNames from 'classnames';

function selectFile(name, text) {
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
          <input type="file" id={name} className="select-file__input" />
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
    attachment: PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string
    }).isRequired,
    children: PropTypes.func
  }
  render() {
    const { name, children } = this.props;
    const selectText = this.getSelectText();

    return (
      <div className={classNames('design-settings__attach', this.props.className)}>
        {this.renderBox()}
        {children && children(selectFile(name, selectText))}
      </div>
    );
  }
  renderBox() {
    if (this.props.attachment && this.props.attachment.url) {
      return (
        <div className="design-settings__attach-box">
          <i className="design-settings__attach-delete" />
          <img src={this.props.attachment.url} className="design-settings__attach-img" />
        </div>
      );
    }
  }
  getSelectText() {
    const { id, url } = this.props.attachment;
    return (id || url) ? 'Выбрать другой файл...' : 'Выбрать файл...'
  }
}


// function radio(name, selectedValue, onChange) {
//   return React.createClass({
//     render: function() {
//       return (
//         <input
//           {...this.props}
//           type="radio"
//           name={name}
//           checked={this.props.value === selectedValue}
//           onChange={onChange.bind(null, this.props.value)} />
//       );
//     }
//   });
// }

// export default React.createClass({
//   propTypes: {
//     name: PropTypes.string,
//     selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     onChange: PropTypes.func,
//     children: PropTypes.func,
//   },

//   render: function() {
//     let {name, selectedValue, onChange, children} = this.props;
//     return (
//       <div>
//         {children && children(radio(name, selectedValue, onChange))}
//       </div>
//     );
//   }
// });




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