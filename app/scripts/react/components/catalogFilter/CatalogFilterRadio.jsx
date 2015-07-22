let CatalogFilterRadio = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    paramName: React.PropTypes.string.isRequired,
    filterName: React.PropTypes.string
  },

  getInitialState() {
    let currentIndex;
    this.props.items.forEach((item, i) => {
      if (item.paramValue === this.props.value) currentIndex = i;
    });
    return { currentIndex };
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
                 name={this.getFieldName(item)}
                 checked={this.state.currentIndex === i}
                 value={item.paramValue}
                 className="b-radio__native"
                 onChange={this.handleChange.bind(this, i)} />
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

  getFieldName(item) {
    if (item.paramValue === this.props.default) return;

    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      return this.props.paramName;
    }
  },

  handleChange(index, e) {
    let elRect = e.target.getBoundingClientRect(),
        offsetLeft = 15;

    let filter = this.getFilter();
    let position = {
      left: elRect.right + offsetLeft,
      top: elRect.top + document.body.scrollTop - elRect.height / 2
    };

    this.setState({ currentIndex: index });
    KioskEvents.emit(KioskEvents.keys.commandTooltipShow(), position, filter);
  },

  getFilter() {
    let filter = $(this.getDOMNode()).closest('form').serialize();

    if (this.props.params && this.props.params.category_id) {
      filter = filter ?
        filter + '&category_id=' + this.props.params.category_id :
        '?category_id=' + this.props.params.category_id
    }

    return filter;
  }
});

export default CatalogFilterRadio;