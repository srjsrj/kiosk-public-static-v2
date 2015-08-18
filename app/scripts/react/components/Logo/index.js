import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';

@connect((state) => ({
  vendorLogoUrl: state.design.getIn(['current', 'logoUrl'])
}))
class Logo {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired,
    vendorLogoUrl: PropTypes.string
  }
  render() {
    return (
      <a href={this.props.linkUrl} className="b-logo">
        {this.renderContent(this.props.vendorLogoUrl, this.props.logoText)}
      </a>
    );
  }
  renderContent(vendorLogoUrl, logoText) {
    return vendorLogoUrl ? <img src={vendorLogoUrl} /> : <span>{logoText}</span>;
  }
}

export default connectToRedux(Logo);