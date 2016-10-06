/*global $, Bugsnag, gon */

import 'es5-shim';
import './lib/ReactRailsUJS';

import './render.libs';
import './render.bundle';

import 'jquery-ujs';
import './lib/csrfToken';

import './lib/eventsHelper';
import './lib/bugsnagAjax';

if (typeof Bugsnag !== 'undefined') {
  Bugsnag.releaseStage = gon.env;
  Bugsnag.notifyReleaseStages = ['production', 'reproduction', 'staging'];
  Bugsnag.metaData = { space: 'public' };
}

$(() => {
  $.ajaxSetup({ cache: true });
  $('[autosubmit]').submit();
  $('.alert:not(.coupon-info):not(.cart-info)').delay(5000).fadeOut(400);
});
