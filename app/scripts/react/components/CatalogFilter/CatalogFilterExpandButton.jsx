import React, { Component, PropTypes } from 'react';

class CatalogFilterExpandButton extends Component {
  handleClick(ev) {
    ev.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    if (!this.props.expanded) {
      return (
        <span
          className="b-full-filter__item__expand"
          onClick={this.handleClick.bind(this)}
        >
          Развернуть список
        </span>
      );
    }

    return null;
  }
}

CatalogFilterExpandButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CatalogFilterExpandButton;