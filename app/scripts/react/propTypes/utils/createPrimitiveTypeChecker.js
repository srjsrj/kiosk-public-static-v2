import getPropType from './getPropType';
import getPreciseType from './getPreciseType';
import createChainableTypeChecker from './createChainableTypeChecker';
import ReactPropTypeLocationNames from '../lib/ReactPropTypeLocationNames';

export default function createPrimitiveTypeChecker(expectedType, onError) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);

    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      var message = ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.");

      if (onError) onError(message);
      return new Error(message);
    }
    return null;
  }
  return createChainableTypeChecker(validate, onError);
}