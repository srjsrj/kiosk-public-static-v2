import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Bubble extends Component {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { className, count, text, url } = this.props;
    const bubbleClasses = classNames({
      'bubble': true,
      'bubble--with-text': !!text,
    }, className);

    return (
      <a className={bubbleClasses} href={url}>
        {text && <span className="bubble__text">{text}</span>}
        {count && <span className="bubble__count">{count}</span>}
      </a>
    );
  }
}