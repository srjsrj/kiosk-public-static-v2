/*global $, gon */
if (typeof $ === 'function') {
  const token = $('meta[name="csrf-token"]').attr('content');

  $.ajaxSetup({
    beforeSend: (xhr) => {
      xhr.setRequestHeader('X-CSRF-Token', token);
      if (gon.access_token != null) {
        xhr.setRequestHeader('X-Access-Token', gon.access_token);
      }
    },
  });
}
