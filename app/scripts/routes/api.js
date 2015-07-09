const operatorApiUrl = gon.operator_api_url || 'http://kiiiosk.ru/operator/api',
      publicApiUrl = gon.public_api_url || '';

export function designSettings() {
  return operatorApiUrl + '/v1/design_settings';
}

export function productsFilteredCount(filter) {
  return publicApiUrl + '/v1/products/filtered/count?' + filter
}