let CatalogFilterRange = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
    valueFrom: React.PropTypes.number,
    valueTo: React.PropTypes.number,
    units: React.PropTypes.string,
    paramName: React.PropTypes.string.isRequired,
    filterName: React.PropTypes.string
  },

  getInitialState() {
    return {
      from: this.props.valueFrom || this.props.from,
      to: this.props.valueTo || this.props.to
    };
  },

  componentDidMount() {
    let slider = this.refs.slider.getDOMNode();

    $(slider).noUiSlider({
      start: [this.state.from, this.state.to],
      range: {
        min: this.props.from,
        max: this.props.to
      },
      connect: true
    });

    $(slider).on('slide', this.handleSlide);
    $(slider).on('change', this.handleChange);
  },

  componentWillUnmount() {
    let slider = this.refs.slider.getDOMNode();
    $(slider).off('slide', this.handleSlide);
    $(slider).off('change', this.handleChange);
  },

  render() {
    let paramName;

    if (this.props.filterName != null) {
      paramName = `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      paramName = this.props.paramName;
    }

    return (
      <li className="b-full-filter__item b-full-filter__item_price">
        <div className="b-full-filter__item__title">
          {this.props.title}
        </div>
        <div className="b-full-filter__widget">
          <div className="b-full-filter__slider">
            <div ref="rangeValue" className="b-full-filter__slider__value">
              {this.state.from}
              <span className="slider-divider"> – </span>
              {this.state.to} <span dangerouslySetInnerHTML={{__html: this.props.units}} />
            </div>
            <div ref="slider" className="b-full-filter__slider__embed" />
          </div>
        </div>
        <input type="hidden"
               name={paramName + '[from]'}
               value={this.state.from} />
        <input type="hidden"
               name={paramName + '[to]'}
               value={this.state.to} />
      </li>
    );
  },

  handleSlide(e, range) {
    this.setState({
      from: parseInt(range[0]),
      to: parseInt(range[1])
    });
  },

  handleChange() {
    let elRect = this.refs.rangeValue.getDOMNode().getBoundingClientRect(),
        offsetLeft = 15;

    let filter = $(this.getDOMNode()).closest('form').serialize();
    let position = {
      left: elRect.right + offsetLeft,
      top: elRect.top + document.body.scrollTop - elRect.height / 2
    };

    KioskEvents.emit(KioskEvents.keys.commandTooltipShow(), position, filter);
  }
});

export default CatalogFilterRange;