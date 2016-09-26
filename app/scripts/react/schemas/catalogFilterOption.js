import { PropTypes } from 'react';
const {
  array,
  arrayOf,
  bool,
  oneOf,
  oneOfType,
  shape,
  string,
  number,
} = PropTypes;

const baseFields = {
  title: string.isRequired,
  paramName: string.isRequired,
};

const rangeOption = shape({
  ...baseFields,
  type: oneOf(['range']).isRequired,
  units: string,
  from: number.isRequired,
  to: number.isRequired,
  step: number,
  valueFrom: number,
  valueTo: number,
});

const checkboxOption = shape({
  ...baseFields,
  type: oneOf(['checkbox']).isRequired,
  items: arrayOf(shape({
    name: string.isRequired,
    paramValue: string.isRequired,
    checked: bool.isRequired,
  })),
});

const radioOption = shape({
  ...baseFields,
  type: oneOf(['radio']).isRequired,
});

const colorOption = shape({
  ...baseFields,
  type: oneOf(['color']).isRequired,
});

export default oneOfType([
  rangeOption,
  checkboxOption,
  radioOption,
  colorOption,
]);
