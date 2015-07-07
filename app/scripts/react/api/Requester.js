import reqwest from 'reqwest';
import prepareData from '../utils/prepareData';

function vendorToken () {
  return 'adsh213472orafasdf897sckasBCK';
  // CurrentUserStore.getAccessToken()
}

function request(_method, url, srcData = {}) {
  const headers = prepareData({
    'X-Requested-With': 'XMLHttpRequest',
    'X-Vendor-Token': vendorToken()
  });
  const data = prepareData({
    ...srcData,
    _method
  });

  let dataType, processData;
  if (data instanceof FormData) {
    dataType = 'multipart/form-data';
    processData = false;
  } else {
    dataType = 'json';
    processData = true;
  }

  let method;
  switch(_method) {
    case 'POST': case 'PUT': case 'DELETE':
      method = 'POST'; break;
    default:
      method = 'GET'; break;
  }

  return reqwest({ url, headers, method, data, dataType, processData });
}

export default {
  get(url, srcData) {
    return request('GET', url, srcData);
  },
  create(url, srcData) {
    return request('POST', url, srcData);
  },
  update(url, srcData) {
    return request('PUT', url, srcData);
  },
  delete(url, srcData) {
    return request('DELETE', url, srcData);
  }
}