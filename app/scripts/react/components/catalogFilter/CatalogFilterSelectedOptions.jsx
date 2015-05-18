let CatalogFilterSelectedOptions = React.createClass({
  propTypes: {
    selectedOptions: React.PropTypes.array.isRequired
  },

  render() {
    if (this.props.selectedOptions.length) {
      return (
        <li className="b-full-filter__item">
          <div className="b-full-filter__item__title">
            Текущий выбор
          </div>
          {this.renderOptions()}
        </li>
      );
    }

    return null;
  },

  renderOptions() {
    let options = this.props.selectedOptions.map((item, i) => {
      return (
        <span className="b-full-filter__value"
              onClick={this.removeOption.bind(null, item.url)}
              key={i}>
          {item.name}
        </span>
      );
    });

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  },

  removeOption(url) {
    window.location = url;
  }
});

export default CatalogFilterSelectedOptions;