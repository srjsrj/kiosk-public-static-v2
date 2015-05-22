CatalogFilterTooltip = require '../components/CatalogFilter/CatalogFilterTooltip'

class TooltipController

  _pendingTooltip: null

  constructor: ->
    KioskEvents.on KioskEvents.keys.commandTooltipShow(), @show
    KioskEvents.on KioskEvents.keys.commandTooltipHide(), @close

  show: (position, filter, timeout = 3000) =>
    container = @_getContainer()

    @close()

    tooltip = React.render (
      <CatalogFilterTooltip
          filter={ filter }
          position={ position }
          onClose={ this.close } />
    ), container

    @_pendingTooltip = tooltip

  close: =>
    container = @_getContainer()

    React.unmountComponentAtNode container
    @_pendingTooltip = null

  _getContainer: =>
    container = document.querySelector '[tooltip-container]'

    unless container?
      container = document.createElement 'div'
      container.setAttribute 'tooltip-container', ''
      document.body.appendChild container

    container

module.exports = TooltipController