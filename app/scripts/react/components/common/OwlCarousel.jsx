import React, { findDOMNode, PropTypes } from 'react';

export default class OwlCarousel {
  static propTypes = {
    id: PropTypes.string,
    options: PropTypes.object,
    style: PropTypes.object,
  }
  static defaultProps = {
    options: {},
  }
  componentDidMount() {
    $(findDOMNode(this)).owlCarousel(this.props.options);
  }
  componentWillReceiveProps() {
    $(findDOMNode(this)).data('owlCarousel').destroy();
  }
  componentDidUpdate() {
    $(findDOMNode(this)).owlCarousel(this.props.options);
  }
  componentWillUnmount() {
    $(findDOMNode(this)).data('owlCarousel').destroy();
  }
  goTo(x) {
    $(findDOMNode(this)).data('owlCarousel').goTo(x);
  }
  render() {
    const { children, id, options, style } = this.props;

    options.touchDrag ? React.initializeTouchEvents(true)
                      : React.initializeTouchEvents(false);

    return (
      <div id={id} style={style}>
        {children}
      </div>
    );
  }
}