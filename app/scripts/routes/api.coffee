ApiRoutes =

  productsFilteredCount: (filter) ->
    gon.public_api_url + '/v1/products/filtered/count?' + filter

module.exports = ApiRoutes
