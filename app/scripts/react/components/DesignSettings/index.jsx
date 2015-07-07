import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as designActions from '../../actions/designActions';
import * as popupActions from '../../actions/popupActions';

import Scroller from '../common/Scroller';
import DesignSettingsGroup from './DesignSettingsGroup';
import DesignSettingsOption from './DesignSettingsOption';
import DesignSettingsSlider from './DesignSettingsSlider';
import DesignSettingsRadioList from './DesignSettingsRadioList';
import DesignSettingsCheckbox from './DesignSettingsCheckbox';
import DesignSettingsAttach from './DesignSettingsAttach';
import DesignSettingsSaveButton from './DesignSettingsSaveButton';
import DesignSettingsCloseButton from './DesignSettingsCloseButton';

class DesignSettings {
  static propTypes = {
    current: PropTypes.instanceOf(Map).isRequired,
    options: PropTypes.instanceOf(Map).isRequired,
    hasUnsavedFields: PropTypes.bool.isRequired,
    updating: PropTypes.bool.isRequired,
    changeOption: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired,
    closeDesignSettingsPopup: PropTypes.func.isRequired
  }
  render() {
    const { current, options, hasUnsavedFields } = this.props;

    return (
      <div className="design-settings">
        <header className="design-settings__header">
          <span>Управление дизайном</span>
          <DesignSettingsCloseButton onClick={this.props.closeDesignSettingsPopup} />
        </header>
        <div className="design-settings__body">
          <Scroller className="design-settings__scroll">
            <DesignSettingsGroup title="Стили">
              <DesignSettingsOption title="Цвет страницы">
                <DesignSettingsRadioList {...this.getProps('pageBgColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Фон страницы">
                <DesignSettingsAttach
                  {...this.getAttachProps('pageBg')}
                  className="design-settings__attach--image"
                >
                  {(SelectFile) =>
                    <SelectFile className="select-file--icon select-file--icon-pencil" />
                  }
                </DesignSettingsAttach>
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет ленты">
                <DesignSettingsRadioList {...this.getProps('feedBgColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Прозрачность ленты">
                <DesignSettingsSlider {...this.getProps('feedTransparency')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет текста">
                <DesignSettingsRadioList {...this.getProps('fontColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Шрифт">
                <DesignSettingsRadioList {...this.getProps('fontFamily')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Размер шрифта">
                <DesignSettingsRadioList {...this.getProps('fontSize')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Каталог">
              <DesignSettingsOption title="Товаров в ряд">
                <DesignSettingsRadioList {...this.getProps('productsInRow')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Страница товара">
              <DesignSettingsOption
                title="Фото сверху?"
                className="design-settings__option--row"
              >
                <DesignSettingsCheckbox {...this.getProps('productLayoutBigpic')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Логотип">
              <DesignSettingsOption>
                <DesignSettingsAttach {...this.getAttachProps('logo')}>
                  {(SelectFile) => <SelectFile withText={true} />}
                </DesignSettingsAttach>
              </DesignSettingsOption>
            </DesignSettingsGroup>
          </Scroller>
        </div>
        <div className="design-settings__footer">
          <DesignSettingsSaveButton
            inProcess={this.props.updating}
            hasChanges={this.props.hasUnsavedFields}
            onClick={this.props.saveChanges}
          />
        </div>
      </div>
    );
  }
  getProps(property) {
    const { current, options, changeOption } = this.props;
    return {
      ...options.get(property).toObject(),
      value: current.get(property),
      onChange: changeOption.bind(this, property)
    };
  }
  getAttachProps(property) {
    const { current, options, changeImage } = this.props;
    return {
      ...options.get(property + 'Url').toObject(),
      value: current.get(property + 'Url'),
      onChange: changeImage.bind(this, property)
    }
  }
}

@connect((state) => ({
  design: state.design,
  popups: state.popup.get('popups')
}))
class DesignSettingsContainer {
  static propTypes = {
    design: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { design, dispatch } = this.props;

    if (this.isOpened()) {
      return (
        <DesignSettings
          {...design.toObject()}
          {...bindActionCreators({...designActions, ...popupActions}, dispatch)}
        />
      );
    } else {
      return null;
    }
  }
  isOpened() {
    // TODO: User "reselect"
    return this.props.popups.some((popup) => (
      popup.get('style') === 'DesignSettings'
    ));
  }
}

export default connectToRedux(DesignSettingsContainer);