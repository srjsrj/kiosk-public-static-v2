/*global $, Bugsnag */

$(() => {
  $(document).ajaxError((event, jqxhr, settings, thrownError) => {
    if (jqxhr.status === 0 || jqxhr.readyState === 0) { // abort & page unload
      return;
    }

    const name = `[AJAX] ${jqxhr.responseJSON.error}`;
    const message = '';
    const metaData = {
      url: settings.url,
      data: settings.data,
      httpMethod: settings.method,
      thrownError: thrownError,
    };
    const severity = 'error';

    Bugsnag.notify(name, message, metaData, severity);
  });
});
