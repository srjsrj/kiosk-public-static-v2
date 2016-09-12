import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as popupActions from '../../actions/popupActions';
import connectToRedux from '../HoC/connectToRedux';
import DesignSettings from '../DesignSettings/DesignSettingsContainer';
import DesignPreview from '../DesignPreview';
import Userbar from './Userbar';

@connect(() => ({}))
class UserbarContainer extends Component {
  render() {
    const {
      authUrl, categoryPageUrl, dispatch, pageType, productPageUrl,
    } = this.props;

    return (
      <div>
        <Userbar
          {...this.props}
          {...bindActionCreators(popupActions, dispatch)}
        />
        <DesignSettings
          authUrl={authUrl}
          categoryPageUrl={categoryPageUrl}
          pageType={pageType}
          productPageUrl={productPageUrl}
        />
        <DesignPreview pageType={pageType} />
      </div>
    );
  }
}

UserbarContainer.propTypes = {
  authUrl: PropTypes.string.isRequired,
  categoryPageUrl: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  pageType: PropTypes.string.isRequired,
  productPageUrl: PropTypes.string.isRequired,
};

export default connectToRedux(UserbarContainer);
