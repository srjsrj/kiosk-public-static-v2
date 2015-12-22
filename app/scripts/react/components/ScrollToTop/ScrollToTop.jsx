import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { getElt, getScrollTop, setScrollTop } from '../../helpers/dom';
import { animate } from '../../helpers/animation';
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
  speedConduct(originSpeed, duration, cur, total) {
    if (total === 0) return 0;

    const { PI, sin: method} = Math;
    const INITIAL_SPEED = 2;

    return originSpeed * method(PI * (total - cur) / total) + INITIAL_SPEED;
  }
  scrollToTop(elt, duration) {
    const originY = getScrollTop(elt);
    const originSpeed = originY / (duration / 60);
    let currentY = originY;
    let currentSpeed;

    const operate = () => {
      currentSpeed = this.speedConduct(originSpeed, duration, currentY, originY);
      currentY -= currentSpeed;
      if (setScrollTop(elt, currentY) !== 0) {
        animate(operate);
      }
    };

    operate();
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
    this.scrollToTop(container, this.props.duration);
  }
  render() {
    const { isVisible } = this.state;
    const buttonClasses = classNames({
      'ScrollToTop': true,
      'is-visible': isVisible,
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
  offset: 100,
};

export default ScrollToTop;