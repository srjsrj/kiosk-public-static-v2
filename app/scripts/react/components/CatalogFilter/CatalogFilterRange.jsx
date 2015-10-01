import numeral from 'numeral';
import noUiSlider from 'nouislider';
import { showFilteredCount } from '../../actions/catalogFilterActions';

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
    const slider = React.findDOMNode(this.refs.slider);

    noUiSlider.create(slider, {
      step: this.props.step,
      start: [this.state.from, this.state.to],
      range: {
        min: this.props.from,
        max: this.props.to
      },
      // range: this.getRange(),
      connect: true
    });

    slider.noUiSlider.on('slide', this.handleSlide);
    slider.noUiSlider.on('change', this.handleChange);
  },

  componentWillUnmount() {
    const slider = React.findDOMNode(this.refs.slider);

    slider.noUiSlider.off('slide', this.handleSlide);
    slider.noUiSlider.off('change', this.handleChange);
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
    const { filterName, paramName, from: pFrom, to: pTo } = this.props;
    const { from: sFrom, to: sTo } = this.state;
    const parName = filterName ? `${filterName}[${paramName}]` : paramName;

    if (sFrom !== pFrom || sTo !== pTo) {
      return (
        <span>
          <input name={parName + '[from]'} type="hidden" value={sFrom} />
          <input name={parName + '[to]'} type="hidden" value={sTo} />
        </span>
      );
    }
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

  handleSlide(range) {
    this.setState({
      from: parseInt(range[0]),
      to: parseInt(range[1])
    });
  },

  handleChange() {
    const filter = this.getFilter();
    showFilteredCount(filter);
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

export default CatalogFilterRange;