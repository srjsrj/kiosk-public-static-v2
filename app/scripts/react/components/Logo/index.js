import { Component, PropTypes } from 'react';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';

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