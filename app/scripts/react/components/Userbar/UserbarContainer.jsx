import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as popupActions from '../../actions/popupActions';
import Userbar from '.';
import DesignSettings from '../DesignSettings/DesignSettingsContainer';
import DesignPreview from '../DesignPreview';

@connect(() => ({}))
class UserbarContainer {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    operatorUrl: PropTypes.string.isRequired
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Userbar
          {...this.props}
          {...bindActionCreators(popupActions, dispatch)}
        />
        <DesignSettings />
        <DesignPreview />
      </div>
    );
  }
}

export default connectToRedux(UserbarContainer);