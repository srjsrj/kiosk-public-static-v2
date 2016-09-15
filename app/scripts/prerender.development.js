global.gon = {
  env: 'production',
  operator_api_url: 'http://wannabe.vagrant.dev:3000/operator/api',
  public_api_url: 'http://wannabe.vagrant.dev:3000/api',
  thumbor_url: 'http://thumbor.kiiiosk.ru',
  kiiiosk: true,
  max_items_count: 100,
};

require('./prerender.bundle');
