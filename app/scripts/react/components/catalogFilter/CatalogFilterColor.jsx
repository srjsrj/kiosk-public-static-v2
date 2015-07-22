let CatalogFilterColor = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
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
        <label className="b-cbox b-cbox_color" key={i}>
          <input type="checkbox"
                 name={this.getFieldName(item)}
                 defaultChecked={item.checked}
                 title={item.name}
                 className="b-radio__native"
                 onChange={this.handleChange} />
          <div className="b-cbox__val" style={{backgroundColor: item.hexCode}} />
        </label>
      );
    });

    return (
      <div ref="list" className="b-full-filter__widget">
        {options}
      </div>
    );
  },

  getFieldName(item) {
    if (this.props.filterName != null) {
      return `${this.props.filterName}[${this.props.paramName}][${item.paramValue}]`;
    } else {
      return item.paramValue;
    }
  },

  handleChange(e) {
    let elRect = e.target.getBoundingClientRect(),
        listRect = this.refs.list.getDOMNode().getBoundingClientRect(),
        offsetLeft = 15;

    let filter = this.getFilter();
    let position = {
      left: listRect.right + offsetLeft,
      top: elRect.top + document.body.scrollTop - elRect.height / 2
    };

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

export default CatalogFilterColor;