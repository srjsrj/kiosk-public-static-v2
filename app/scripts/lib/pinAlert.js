/*global $, I18n, Turbolinks */
let timeout = 0;
let interval = null;

function timer() {
  timeout = this.data('timeout');
  timeout--;
  this.data('timeout', timeout);

  if (timeout <= 0) {
    $('[pin-alert-timeout]').hide();
    $('.pin-alert-base').show();

    clearInterval(interval);
  } else {
    $('[pin-alert-seconds]')
      .text(I18n.t('vendor.seconds_count', { count: timeout }));
  }
}

function activateTimeout($pinAlert) {
  timeout = $pinAlert.data('timeout');

  if (timeout <= 0) {
    return;
  }

  interval = setInterval(timer.bind($pinAlert), 1000);
}


$(() => {
  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
    return;
  }

  const $pinAlert = $('[pin-alert]');

  if ($pinAlert.length > 0) {
    activateTimeout($pinAlert);
  }
});
