$ ->
  $checkoutTotal = $ '[checkout-total]'

  setCheckoutDeliveryPrice= (price)->
    $checkoutTotal.data 'delivery-price', price
    updateCheckoutTotal()

  updateCheckoutTotal= ->
    totalPrice = $checkoutTotal.data('delivery-price') + $checkoutTotal.data('products-price')

    $checkoutTotal.html accounting.formatMoney totalPrice

  toggleDeliveryOnlyElementsVisibility= (showFieldsQuery) ->
    $('[hideable]').slideUp()

    if showFieldsQuery
      $el = $ showFieldsQuery
      $el.stop().slideDown()

  #setOnlyCity = (city) ->
    #$c = $ '[city-field]'
    #saved_city = $c.data 'saved-city'
    #if city
      #unless $c.attr 'disabled'
        #$c.attr 'disabled', 'disabled'
        #$c.data 'saved-city', $c.val() # unless saved_city

      #$c.val city
    #else
      #if $c.attr 'disabled'
        #$c.removeAttr 'disabled'
        #$c.val saved_city

  selectDeliveryType = ($e) ->
    if $e?
      #setOnlyCity $e.data('delivery-only-city')
      setCheckoutDeliveryPrice parseInt $e.data('delivery-price')

      toggleDeliveryOnlyElementsVisibility $e.data('show-fields-query')
    else
      console.error? 'Ни один способ доставки по умолчанию не выбран'

  $('[delivery-type]').on 'change', ->
    selectDeliveryType $ @

  findSelectedDeliveryType= ->
    $el = $('[delivery-type]').filter(':checked')
    if $el.length==0
      return null
    else
      return $el

  window.InitializeCheckout = ->
    console.log 'Initialize Checkout'
    selectDeliveryType findSelectedDeliveryType()

