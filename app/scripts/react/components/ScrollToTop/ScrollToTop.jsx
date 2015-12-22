import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { getElt } from '../../helpers/dom';
import { scrollToTop } from '../../helpers/animation';
import Icon from '../common/Icon';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);

    this.state = {
      isVisible: false,
    };
  }
  componentDidMount() {
    const container = this.getContainer();
    container.addEventListener('scroll', this.updateVisibility, false);
  }
  componentWillUnmount() {
    const container = this.getContainer();
    container.removeEventListener('scroll', this.updateVisibility, false);
  }
  getContainer() {
    return getElt(this.props.containerSelector) || window;
  }
  getContainerScrollTop() {
    const container = this.getContainer();
    return container.scrollTop != null ? container.scrollTop : container.pageYOffset;
  }
  updateVisibility() {
    const { offset } = this.props;
    const scrollTop = this.getContainerScrollTop();

    this.setState({
      isVisible: scrollTop > offset
    });
  }
  handleClick() {
    const container = this.getContainer();
    scrollToTop(container, this.props.duration);
  }
  render() {
    const { isVisible } = this.state;
    const buttonClasses = classNames({
      'ScrollToTop': true,
      'is-visible': isVisible,
      'element--active-opacity': true
    });

    return (
      <div
        className={buttonClasses}
        onClick={this.handleClick}
      >
        <div className="ScrollToTop-content">
          <Icon name="scroll-to-top" />
        </div>
      </div>
    );
  }
}

ScrollToTop.propTypes = {
  containerSelector: PropTypes.string,
  duration: PropTypes.number,
  offset: PropTypes.number,
};
ScrollToTop.defaultProps = {
  containerSelector: 'window',
  duration: 1000,
  offset: 300,
};

export default ScrollToTop;