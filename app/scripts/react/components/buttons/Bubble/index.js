import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Bubble extends Component {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    data: PropTypes.array,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  getDataAttributes(data) {
    if (data) {
      return data.reduce((acc, attr) => ({
        ...acc,
        ['data-' + attr]: true,
      }), {});
    }
  }
  render() {
    const { className, count, data, text, url } = this.props;
    const bubbleClasses = classNames({
      'bubble': true,
      'bubble--with-text': !!text,
    }, className);

    return (
      <a
        {...this.getDataAttributes(data)}
        className={bubbleClasses}
        href={url}
      >
        {text && <span className="bubble__text">{text}</span>}
        {count && <span className="bubble__count">{count}</span>}
      </a>
    );
  }
}