import { productCards } from '../../routes/api';

export function load(vendorID, productCardID) {
  return reqwest({
    url: productCards(productCardID),
    type: 'json',
  });
}