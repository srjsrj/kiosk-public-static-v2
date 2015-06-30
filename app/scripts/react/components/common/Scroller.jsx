import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Ps from 'perfect-scrollbar';

export default class Scroller {
  static propTypes = {
    className: PropTypes.string,
    onScroll: PropTypes.func
  }
  componentDidMount() {
    // TODO: Props in cases when only one axis should be enabled
    Ps.initialize(React.findDOMNode(this), {
      suppressScrollX: true
    });
  }
  componentDidUpdate() {
    Ps.update(React.findDOMNode(this))
  }
  componentWillUnmount() {
    Ps.destroy(React.findDOMNode(this));
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