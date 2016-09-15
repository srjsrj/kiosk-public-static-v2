global.gon = {
  env: 'production',
  operator_api_url: 'http://wannabe.kiiiosk.ru/operator/api',
  public_api_url: 'http://wannabe.kiiiosk.ru/api',
  thumbor_url: 'http://thumbor.kiiiosk.ru',
  kiiiosk: true,
  max_items_count: 100,
};

require('./prerender.bundle');
