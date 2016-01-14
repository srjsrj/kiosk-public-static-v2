import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import numeral from 'numeral';
import noUiSlider from 'nouislider';
import { getFilter } from './utils';
import { showFilteredCount } from '../../actions/catalogFilterActions';

class CatalogFilterRange extends Component {
  constructor(props) {
    super(props);

    this.handleSlide = this.handleSlide.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    from: this.props.valueFrom || this.props.from,
    to: this.props.valueTo || this.props.to
  }
  componentDidMount() {
    const slider = findDOMNode(this.refs.slider);

    noUiSlider.create(slider, {
      step: this.props.step,
      start: [this.state.from, this.state.to],
      range: {
        min: this.props.from,
        max: this.props.to
      },
      connect: true,
    });

    slider.noUiSlider.on('slide', this.handleSlide);
    slider.noUiSlider.on('change', this.handleChange);
  }
  componentWillUnmount() {
    const slider = findDOMNode(this.refs.slider);

    slider.noUiSlider.off('slide', this.handleSlide);
    slider.noUiSlider.off('change', this.handleChange);
  }
  handleSlide([from, to]) {
    this.setState({
      from: parseInt(from),
      to: parseInt(to),
    });
  }
  handleChange() {
    showFilteredCount(getFilter(this, this.props.params), this.props.t);
  }
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
  }
  render() {
    const { title, units } = this.props;
    const { from , to } = this.state;

    return (
      <li className="b-full-filter__item b-full-filter__item_price">
        <div className="b-full-filter__item__title">
          {title}
        </div>
        <div className="b-full-filter__widget">
          <div className="b-full-filter__slider">
            <div className="b-full-filter__slider__value" ref="rangeValue">
              {numeral(from).format('0,0[.]00')}
              <span className="slider-divider"> – </span>
              {numeral(to).format('0,0[.]00')} <span dangerouslySetInnerHTML={{__html: units}} />
            </div>
            <div className="b-full-filter__slider__embed" ref="slider" />
          </div>
        </div>
        {this.renderHiddenRange()}
      </li>
    );
  }
}

CatalogFilterRange.propTypes = {
  filterName: PropTypes.string,
  from: PropTypes.number.isRequired,
  paramName: PropTypes.string.isRequired,
  step: PropTypes.number,
  stepRules: PropTypes.array,
  title: PropTypes.string.isRequired,
  to: PropTypes.number.isRequired,
  units: PropTypes.string,
  valueFrom: PropTypes.number,
  valueTo: PropTypes.number,
};
CatalogFilterRange.defaultProps = {
  step: 1,
  stepRules: [],
};

export default CatalogFilterRange;