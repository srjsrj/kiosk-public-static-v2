import React, { Component, PropTypes } from 'react';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import Logo from '.';

@connect((state) => ({
  globalLogoUrl: state.design.getIn(['current', 'logoUrl'])
}))
class LogoContainer extends Component {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired,
    logoUrl: PropTypes.string,
    imageAlt: PropTypes.string,
  }
  state = {
    logoUrl: this.props.logoUrl || this.props.globalLogoUrl
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.logoUrl !== nextProps.globalLogoUrl) {
      this.setState({ logoUrl: nextProps.globalLogoUrl });
    }
  }
  render() {
    return <Logo {...this.props} logoUrl={this.state.logoUrl} />;
  }
}

export default connectToRedux(LogoContainer);