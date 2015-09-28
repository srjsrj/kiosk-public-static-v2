$ ->
  # Product carousel (http://owlgraphic.com/owlcarousel)

  $productSlider = $('#product-slider')
  $productThumbs = $('#product-thumbs')

  syncPosition = (el) ->
    current = this.currentItem
    $productThumbs.find('.owl-item').removeClass('synced').eq(current).addClass 'synced'
    center current if $productThumbs.data 'owlCarousel'

  center = (number) ->
    sync2visible = $productThumbs.data('owlCarousel').owl.visibleItems
    num = number
    found = false
    for i of sync2visible
      found = true if num is sync2visible[i]
    if found is false
      if num > sync2visible[sync2visible.length - 1]
        $productThumbs.trigger 'owl.goTo', num - sync2visible.length + 2
      else
        num = 0 if num - 1 is -1
        $productThumbs.trigger 'owl.goTo', num
    else if num is sync2visible[sync2visible.length - 1]
      $productThumbs.trigger 'owl.goTo', sync2visible[1]
    else $productThumbs.trigger 'owl.goTo', num - 1 if num is sync2visible[0]

  initThumbs = ->
    $productThumbs.owlCarousel({
      items: 4
      pagination: false
      afterInit: (el) ->
        el.find('.owl-item').eq(0).addClass 'synced'
    })

    $productThumbs.on 'click', '.owl-item', (e) ->
      e.preventDefault()
      e.stopPropagation()
      number = $(this).data('owlItem')
      $productSlider.trigger 'owl.goTo', number

  initSlider = ->
    $productSlider.owlCarousel({
      singleItem: true
      afterAction: syncPosition
    })

  reinitSlider = ->
    if $productSlider
      $productSlider.data('owlCarousel').reinit({
        singleItem: true
        afterAction: syncPosition
      })

  initThumbs()
  initSlider()
  if $productSlider.width() != $productSlider.find('.owl-item').eq(0).width()
    reinitSlider()

  $(document).on('updateProductImages', reinitSlider);