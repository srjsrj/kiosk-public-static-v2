import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as designActions from '../../actions/designActions';

import Scroller from '../common/Scroller';
import DesignSettingsGroup from './DesignSettingsGroup';
import DesignSettingsOption from './DesignSettingsOption';
import DesignSettingsRadioList from './DesignSettingsRadioList';
import DesignSettingsCheckbox from './DesignSettingsCheckbox';
import DesignSettingsAttach from './DesignSettingsAttach';

class DesignSettings {
  static propTypes = {
    options: PropTypes.object.isRequired,
    unsavedFields: PropTypes.object.isRequired,
    changeOption: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="design-settings">
        <div className="design-settings__header">Управление дизайном</div>
        <div className="design-settings__body">
          <Scroller className="design-settings__scroll">
            <DesignSettingsGroup title="Стили">
              <DesignSettingsOption title="Цвет страницы">
                <DesignSettingsRadioList {...this.props.options.pageColor} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Фон страницы">
                <DesignSettingsAttach
                    {...this.props.options.pageBg}
                    className="design-settings__attach--image">
                  {
                    (SelectFile) =>
                      <SelectFile className="select-file--icon select-file--icon-pencil" />
                  }
                </DesignSettingsAttach>
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет текста">
                <DesignSettingsRadioList {...this.props.options.textColor} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет активных элементов">
                <DesignSettingsRadioList {...this.props.options.activeColor} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Шрифт">
                <DesignSettingsRadioList {...this.props.options.fontFamily} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Размер шрифта">
                <DesignSettingsRadioList {...this.props.options.fontSize} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Каталог">
              <DesignSettingsOption title="Товаров в ряд">
                <DesignSettingsRadioList {...this.props.options.columns} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Страница товара">
              <DesignSettingsOption title="Фото сверху?" className="design-settings__option--row">
                <DesignSettingsCheckbox {...this.props.options.photoOnTop} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Логотип">
              <DesignSettingsOption>
                <DesignSettingsAttach {...this.props.options.logo}>
                  {(SelectFile) => <SelectFile withText={true} />}
                </DesignSettingsAttach>
              </DesignSettingsOption>
            </DesignSettingsGroup>
          </Scroller>
        </div>
        <div className="design-settings__footer">
          <button className="__disabled design-settings__save-button">Изменений нет</button>
        </div>
      </div>
    );
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
    const { design, unsavedFields, dispatch } = this.props;
    return (
      <DesignSettings
          {...this.props.design}
          {...bindActionCreators(designActions, dispatch)} />
    );
  }
}

export default connectToRedux(DesignSettingsContainer);