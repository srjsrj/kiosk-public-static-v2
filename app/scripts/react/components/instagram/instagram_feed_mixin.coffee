window.InstagramFeed_Mixin =
  STATE_LOADING: 'loading'
  STATE_LOADED:  'loaded'
  STATE_ERROR:   'error'

  _getRequestUrl: ->
    url = gon.public_api_url + '/v1/instagram/feed/'
    url += '?limit=' + @props.limit if @props.limit?
    url

  _loadPhotos: ->
    $.ajax(
      url: @_getRequestUrl()
      success: (photos) =>
        if @isMounted() && photos?
          if parseInt(photos.meta.code) != 200
            @_activateErrorState()
            return console.error(photos)

          @setState {
            currentState: @STATE_LOADED
            photos: photos.data
            profileUrl: 'http://instagram.com/' + photos.data[0].user.username
            hashtag: '@'+photos.data[0].user.username
          }
      error: (data) =>
        @_activateErrorState()
    )

  _activateErrorState: -> @setState(currentState: @STATE_ERROR) if @isMounted()
