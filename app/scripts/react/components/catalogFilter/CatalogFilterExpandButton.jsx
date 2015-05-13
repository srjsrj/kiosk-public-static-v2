let CatalogFilterExpandButton = React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    if (!this.props.expanded) {
      return (
        <span className="b-full-filter__item__expand" onClick={this.handleClick}>
          Развернуть список
        </span>
      );
    }

    return null;
  },

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }
});

export default CatalogFilterExpandButton;