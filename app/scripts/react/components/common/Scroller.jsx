import classNames from 'classnames';
import Ps from 'perfect-scrollbar';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class Scroller extends Component {
  static propTypes = {
    className: PropTypes.string,
    onScroll: PropTypes.func,
    updateEvent: PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.updateScroller = this.updateScroller.bind(this);
  }
  componentDidMount() {
    Ps.initialize(findDOMNode(this), { suppressScrollX: true });

    if (this.props.updateEvent) {
      $(document).on(this.props.updateEvent, this.updateScroller);
    }
  }
  componentDidUpdate() {
    this.updateScroller();
  }
  componentWillUnmount() {
    Ps.destroy(findDOMNode(this));

    if (this.props.updateEvent) {
      $(document).off(this.props.updateEvent, this.updateScroller);
    }
  }
  updateScroller() {
    Ps.update(findDOMNode(this));
  }
  render() {
    let scrollerClasses = classNames('b-scroller', this.props.className);

    return (
      <div className={scrollerClasses} onScroll={this.props.onScroll}>
        {this.props.children}
      </div>
    );
  }
}