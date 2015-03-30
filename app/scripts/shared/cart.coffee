$ ->
  $cartTotal = $ '[cart-total]'

  setCartItemCount = ($el, count) ->
    price = + $el.data 'item-price'
    total = price*count

    $el.data 'item-total-price', total

    $price_el = $el.find '[cart-item-total-price]'
    $price_el.html accounting.formatMoney total

    $selector = $el.find '[cart-item-selector]'
    $selector.val count

    updateCartTotal()

  packagePrice = ->
    $p = $('[data-package]:checked')

    if $p
      $p.data('price')
    else
      0

  updateCartTotal = ->
    totalPrice = packagePrice()
    $('[cart-item]').each (idx, block) ->
      totalPrice += + $(block).data('item-total-price')

    $cartTotal.html accounting.formatMoney totalPrice

  updatePackageTotal = ->
    price = packagePrice()

    price = if price>0
      accounting.formatMoney price
    else
      ''

    $('[data-total-package-price]').html price

  $('[data-package]').on 'change', ->
    updatePackageTotal()
    updateCartTotal()

  $('[cart-item-selector]').on 'change', ->
    $e = $ @
    $el = $e.closest '[cart-item]'

    setCartItemCount $el, parseInt($e.val())
