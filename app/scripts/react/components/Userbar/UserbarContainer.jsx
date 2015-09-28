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
    authUrl: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    isDesignOpen: PropTypes.bool.isRequired,
    operatorUrl: PropTypes.string.isRequired,
    pageType: PropTypes.string.isRequired,
  }
  render() {
    const { authUrl, dispatch, pageType } = this.props;

    return (
      <div>
        <Userbar
          {...this.props}
          {...bindActionCreators(popupActions, dispatch)}
        />
        <DesignSettings authUrl={authUrl} />
        <DesignPreview pageType={pageType} />
      </div>
    );
  }
}

export default connectToRedux(UserbarContainer);