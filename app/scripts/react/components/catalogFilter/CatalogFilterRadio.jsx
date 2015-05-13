let CatalogFilterRadio = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    paramName: React.PropTypes.string.isRequired,
    filterName: React.PropTypes.string
  },

  render() {
    return (
      <li className="b-full-filter__item">
        <div className="b-full-filter__item__title">
          {this.props.title}
        </div>
        {this.renderOptions()}
      </li>
    );
  },

  renderOptions() {
    let options = this.props.items.map((item, i) => {
      return (
        <label className="b-radio" key={i}>
          <input type="radio"
                 name={this.getFieldName()}
                 defaultChecked={item.paramValue == this.props.value}
                 value={item.paramValue}
                 className="b-radio__native"
                 onChange={this.handleChange} />
          <div className="b-radio__val">
            {item.name}
          </div>
        </label>
      );
    });

    return (
      <div className="b-full-filter__widget">
        {options}
      </div>
    );
  },

  getFieldName() {
    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      return this.props.paramName;
    }
  },

  handleChange(e) {
    let elRect = e.target.getBoundingClientRect(),
        offsetLeft = 15;

    let filter = $(this.getDOMNode()).closest('form').serialize();
    let position = {
      left: elRect.right + offsetLeft,
      top: elRect.top + document.body.scrollTop - elRect.height / 2
    };

    KioskEvents.emit(KioskEvents.keys.commandTooltipShow(), position, filter);
  }
});

export default CatalogFilterRadio;