const pUrl = window.mrch.config.public_api_url || window.gon.public_api_url;
const oUrl = window.mrch.config.operator_api_url || window.gon.operator_api_url;

export function designSettings() {
  return oUrl + '/v1/design_settings';
}

export function productsFilteredCount(filter) {
  return pUrl + '/v1/products/filtered/count?' + filter;
}

export function checkCouponCode() {
  return pUrl + '/v1/coupon/call';
}

export function productCards(id) {
  return `${pUrl}/v1/product_cards/${id}`;
}