import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';

@connect((state) => ({
  logoUrl: state.design.getIn(['current', 'logoUrl'])
}))
class Logo {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired,
    logoUrl: PropTypes.string,
    imageAlt: PropTypes.string,
  }
  render() {
    return (
      <a href={this.props.linkUrl} className="b-logo">
        {this.renderContent(this.props.logoUrl, this.props.logoText, this.props.imageAlt)}
      </a>
    );
  }
  renderContent(logoUrl, logoText, imageAlt) {
    return logoUrl
      ? <img src={logoUrl} alt={imageAlt} />
      : <span className="b-logo__text">{logoText}</span>;
  }
}

export default connectToRedux(Logo);