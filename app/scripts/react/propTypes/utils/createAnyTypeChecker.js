import emptyFunction from 'react/lib/emptyFunction';
import createChainableTypeChecker from './createChainableTypeChecker';

export default function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));
}