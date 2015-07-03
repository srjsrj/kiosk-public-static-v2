import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as designActions from '../../actions/designActions';

import Scroller from '../common/Scroller';
import DesignSettingsGroup from './DesignSettingsGroup';
import DesignSettingsOption from './DesignSettingsOption';
import DesignSettingsSlider from './DesignSettingsSlider';
import DesignSettingsRadioList from './DesignSettingsRadioList';
import DesignSettingsCheckbox from './DesignSettingsCheckbox';
import DesignSettingsAttach from './DesignSettingsAttach';
import DesignSettingsSaveButton from './DesignSettingsSaveButton';

class DesignSettings {
  static propTypes = {
    current: PropTypes.instanceOf(Map).isRequired,
    options: PropTypes.instanceOf(Map).isRequired,
    hasUnsavedFields: PropTypes.bool.isRequired,
    changeOption: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired
  }
  render() {
    const { current, options, hasUnsavedFields } = this.props;
    return (
      <div className="design-settings">
        <div className="design-settings__header">Управление дизайном</div>
        <div className="design-settings__body">
          <Scroller className="design-settings__scroll">
            <DesignSettingsGroup title="Стили">
              <DesignSettingsOption title="Цвет страницы">
                <DesignSettingsRadioList {...this.getProps('pageBgColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Фон страницы">
                <DesignSettingsAttach
                    {...this.getAttachProps('pageBg')}
                    className="design-settings__attach--image">
                  {(SelectFile) =>
                    <SelectFile className="select-file--icon select-file--icon-pencil" />
                  }
                </DesignSettingsAttach>
              </DesignSettingsOption>
              <DesignSettingsOption title="Прозрачность ленты">
                <DesignSettingsSlider {...this.getProps('feedTransparency')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет текста">
                <DesignSettingsRadioList {...this.getProps('textColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет активных элементов">
                <DesignSettingsRadioList {...this.getProps('activeColor')} />
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
                <DesignSettingsRadioList {...this.getProps('columns')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Страница товара">
              <DesignSettingsOption title="Фото сверху?" className="design-settings__option--row">
                <DesignSettingsCheckbox {...this.getProps('photoOnTop')} />
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
              hasChanges={this.props.hasUnsavedFields}
              onClick={this.props.saveChanges} />
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
      ...options.get(property).toObject(),
      value: current.get(property),
      onChange: changeImage.bind(this, property)
    }
  }
}

@connect((state) => ({
  design: state.design
}))
class DesignSettingsContainer {
  static propTypes = {
    design: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { design, dispatch } = this.props;
    return (
      <DesignSettings
          {...design.toObject()}
          {...bindActionCreators(designActions, dispatch)} />
    );
  }
}

export default connectToRedux(DesignSettingsContainer);