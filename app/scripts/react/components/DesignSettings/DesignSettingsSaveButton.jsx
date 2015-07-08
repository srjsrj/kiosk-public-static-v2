import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import classNames from 'classnames';

export default class DesignSettingsSaveButton {
  static propTypes = {
    isSaving: PropTypes.bool.isRequired,
    unsavedFields: PropTypes.instanceOf(Map).isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    const buttonClasses = classNames('design-settings__save-button', {
      '__disabled': !this.hasChanges()
    });
    return (
      <button
        className={buttonClasses}
        onClick={::this.handleClick}
      >
        {this.getTitle()}
      </button>
    );
  }
  hasChanges() {
    return !!Object.keys(this.props.unsavedFields.toJS()).length;
  }
  getTitle() {
    if (this.props.isSaving) {
      return 'Сохраняем...';
    } else {
      return this.hasChanges() ? 'Сохранить' : 'Изменений нет';
    }
  }
  handleClick() {
    if (this.hasChanges()) {
      this.props.onClick();
    }
  }
}