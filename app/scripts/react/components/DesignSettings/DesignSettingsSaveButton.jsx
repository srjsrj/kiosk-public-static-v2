import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class DesignSettingsSaveButton {
  static propTypes = {
    hasChanges: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    const buttonClasses = classNames('design-settings__save-button', {
      '__disabled': !this.props.hasChanges
    });
    return (
      <button className={buttonClasses} onClick={::this.handleClick}>
        {this.getTitle()}
      </button>
    );
  }
  getTitle() {
    return this.props.hasChanges ? 'Сохранить' : 'Изменений нет';
  }
  handleClick() {
    if (this.props.hasChanges) {
      this.props.onClick();
    }
  }
}