$ ->
  $cartTotal = $ '[cart-total]'

  onCartItemChange = ($el, opts) ->
    price = + $el.data 'item-price'

    total = 0
    if opts.count
      total = total + price * opts.count

    if opts.weight
      weight_of_price = parseFloat($el.data('item-weight-of-price'))
      total = total + (price * opts.weight / weight_of_price)

    $el.data 'item-total-price', total

    $price_el = $el.find '[cart-item-total-price]'
    $price_el.html accounting.formatMoney total

    updateCartTotal()

  selectedPackageElement = -> $('[data-package]:checked')

  packagePrice = ->
    $p = selectedPackageElement()
    if $p.length
      $p.data('price') || 0
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

  updatePackageSubmitButton = ->
    $button = $('[data-package-submit]')

    unless $button.length>0
      console.log 'No package submit button'
      return

    originalHref = $button.data 'href'

    unless originalHref?
      originalHref = $button.attr 'href'
      $button.data 'href', originalHref

    params = $.param package_good_global_id: selectedPackageElement().val()
    href = originalHref+'?'+params
    $button.attr 'href', href

  $('[data-package]').on 'change', ->
    updatePackageTotal()
    updateCartTotal()
    updatePackageSubmitButton()

  $('[cart-item-selector]').on 'change', ->
    $e = $ @
    $el = $e.closest '[cart-item]'

    onCartItemChange $el, {count: parseInt($e.val())}

  $('[cart-item-weight]').on 'keyup mouseup', ->
    $e = $ @
    $el = $e.closest '[cart-item]'

    onCartItemChange $el, {weight: parseFloat($e.val())}
