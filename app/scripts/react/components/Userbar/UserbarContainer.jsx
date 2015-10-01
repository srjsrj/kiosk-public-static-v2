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
    categoryPageUrl: PropTypes.string.isRequired,
    designParamName: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    isDesignOpen: PropTypes.bool,
    operatorUrl: PropTypes.string.isRequired,
    pageType: PropTypes.string.isRequired,
    productPageUrl: PropTypes.string.isRequired,
  }
  static defaultProps = {
    designParamName: 'design_open',
  }
  render() {
    const { authUrl, categoryPageUrl, dispatch, pageType, productPageUrl } = this.props;

    return (
      <div>
        <Userbar
          {...this.props}
          {...bindActionCreators(popupActions, dispatch)}
        />
        <DesignSettings
          authUrl={authUrl}
          categoryPageUrl={categoryPageUrl}
          productPageUrl={productPageUrl}
        />
        <DesignPreview pageType={pageType} />
      </div>
    );
  }
}

export default connectToRedux(UserbarContainer);