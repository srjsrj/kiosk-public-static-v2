import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

export default class AccordionItemBody extends Component {
  static propTypes = {
    bodyClassName: PropTypes.string,
    maxHeight: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    overflow: PropTypes.string,
    uuid: PropTypes.string,
  }
  render() {
    const { bodyClassName, children, maxHeight, overflow, uuid } = this.props;
    const style = {
      maxHeight,
      overflow,
      transition: 'max-height .3s ease'
    };

    return (
      <div
        aria-labelledby={`react-safona-item-title-${ uuid }`}
        className={classNames('react-sanfona-item-body', bodyClassName)}
        id={`react-safona-item-body-${ uuid }`}
        style={style}
      >
        <div className="react-sanfona-item-body-wrapper">
          {children}
        </div>
      </div>
    );
  }
}