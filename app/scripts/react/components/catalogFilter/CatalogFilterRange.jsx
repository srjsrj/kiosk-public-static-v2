import numeral from 'numeral';

let CatalogFilterRange = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
    valueFrom: React.PropTypes.number,
    valueTo: React.PropTypes.number,
    units: React.PropTypes.string,
    step: React.PropTypes.number,
    stepRules: React.PropTypes.array,
    paramName: React.PropTypes.string.isRequired,
    filterName: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      step: 1,
      stepRules: []
      // stepRules: [
      //   {from: 5000, step: 500},
      //   {from: 30000, step: 1000}
      // ]
    };
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
      step: this.props.step,
      start: [this.state.from, this.state.to],
      range: {
        min: this.props.from,
        max: this.props.to
      },
      // range: this.getRange(),
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
    return (
      <li className="b-full-filter__item b-full-filter__item_price">
        <div className="b-full-filter__item__title">
          {this.props.title}
        </div>
        <div className="b-full-filter__widget">
          <div className="b-full-filter__slider">
            <div ref="rangeValue" className="b-full-filter__slider__value">
              {numeral(this.state.from).format('0,0[.]00')}
              <span className="slider-divider"> – </span>
              {numeral(this.state.to).format('0,0[.]00')} <span dangerouslySetInnerHTML={{__html: this.props.units}} />
            </div>
            <div ref="slider" className="b-full-filter__slider__embed" />
          </div>
        </div>
        {this.renderHiddenRange()}
      </li>
    );
  },

  renderHiddenRange() {
    let range = [],
        paramName;

    if (this.props.filterName != null) {
      paramName = `${this.props.filterName}[${this.props.paramName}]`;
    } else {
      paramName = this.props.paramName;
    }

    if (this.props.from != this.state.from) {
      range.push(
        <input type="hidden" name={paramName + '[from]'} value={this.state.from} key="from" />
      );
    }

    if (this.props.to != this.state.to) {
      range.push(
        <input type="hidden" name={paramName + '[to]'} value={this.state.to} key="to" />
      );
    }

    return range;
  },

  getRange() {
    let range = {};

    range['min'] = [this.props.from];
    if (this.props.stepRules.length) {
      this.props.stepRules.forEach((rule) => {
        if (rule.from < this.state.to) {
          let percentage = parseInt((rule.from / this.state.to) * 100, 10);
          range[percentage + '%'] = [rule.from, rule.step];
        }
      });
    }
    range['max'] = [this.props.to];

    return range;
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