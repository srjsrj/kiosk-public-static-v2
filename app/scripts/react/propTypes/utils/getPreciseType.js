import getPropType from './getPropType';

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
export default function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}