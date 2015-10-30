import ReactPropTypeLocationNames from '../lib/ReactPropTypeLocationNames';

export default function createChainableTypeChecker(validate, onError) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        var message = ("Required " + locationName + " `" + propName + "` was not specified in ") +
          ("`" + componentName + "`.");

        if (onError) onError(message);
        return new Error(message);
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}