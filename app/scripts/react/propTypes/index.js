import createPrimitiveTypeChecker from './utils/createPrimitiveTypeChecker';
import createEnumTypeChecker from './utils/createEnumTypeChecker';
import createUnionTypeChecker from './utils/createUnionTypeChecker';
import createShapeTypeChecker from './utils/createShapeTypeChecker';
import createAnyTypeChecker from './utils/createAnyTypeChecker';
import createArrayOfTypeChecker from './utils/createArrayOfTypeChecker';
import createInstanceTypeChecker from './utils/createInstanceTypeChecker';
import ErrorService from '../services/Error';

function errorHandler(errMsg) {
  ErrorService.notifyWarning('Failed propType: ' + errMsg);
}

export default {
  array: createPrimitiveTypeChecker('array', errorHandler),
  bool: createPrimitiveTypeChecker('boolean', errorHandler),
  func: createPrimitiveTypeChecker('function', errorHandler),
  number: createPrimitiveTypeChecker('number', errorHandler),
  object: createPrimitiveTypeChecker('object', errorHandler),
  string: createPrimitiveTypeChecker('string', errorHandler),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  // element: elementTypeChecker,
  instanceOf: createInstanceTypeChecker,
  // node: nodeTypeChecker,
  // objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker
};