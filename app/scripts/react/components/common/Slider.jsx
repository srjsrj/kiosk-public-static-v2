import React, { PropTypes, findDOMNode } from 'react';
import noUiSlider from 'nouislider';

const MINIMUM_VALUE = 0,
      MAXIMUM_VALUE = 1,
      STEP = 0.01;

export default class Slider {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number
  }
  static defaultProps = {
    from: MINIMUM_VALUE,
    to: MAXIMUM_VALUE,
    step: STEP
  }
  componentDidMount() {
    const slider = findDOMNode(this);

    noUiSlider.create(slider, {
      start: this.props.value,
      range: {
        min: this.props.from,
        max: this.props.to
      },
      step: this.props.step
    });
  }
  componentWillUnmount() {
    const slider = findDOMNode(this);
    slider.noUiSlider.destroy();
  }
  render() {
    return <div />;
  }
}


// { PropTypes } = React


// DesignSettingsRange = React.createClass
//   displayName: 'DesignSettingsRange'

//   propTypes:
//     value: PropTypes.number.isRequired
//     from: PropTypes.number
//     to: PropTypes.number
//     step: PropTypes.number
//     onChange: PropTypes.func.isRequired

//   getDefaultProps: ->
//     from: MINIMUM
//     to:   MAXIMUM
//     step: STEP

//   getInitialState: ->
//     value: @props.value

//   componentDidMount: ->
//     range = @refs.range.getDOMNode()

//     $(range).slider
//       min: @props.from
//       max: @props.to
//       step: @props.step
//       range: 'min'
//       value: @props.value
//       animate: true
//       slide: @handleSlide

//   componentWillUnmount: ->
//     range = @refs.range.getDOMNode()
//     $(range).slider 'destroy'

//   render: ->
//     <span>
//       <span ref="range" className="form-range ds-absolute-left ds-fadein-down">
//         <input type="text" className="form-range__input" />
//       </span>
//       { @renderValue() }
//     </span>

//   renderValue: ->
//     formattedValue = (@state.value * 100).toFixed() + '%'

//     return <span className="form-range-value">
//              { formattedValue }
//            </span>

//   handleSlide: (e, ui) ->
//     @setState(value: ui.value)
//     @props.onChange ui.value

// module.exports = DesignSettingsRange