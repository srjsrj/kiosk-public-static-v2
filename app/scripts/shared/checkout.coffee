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

  setCity = (city) ->
    $c = $ '[city-field]'
    if city?
      $c.attr(disabled: true)
    else
      $c.removeAttr('disabled')

  selectDeliveryType = ($e) ->
    if $e?
      setCity $e.data('city')
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

