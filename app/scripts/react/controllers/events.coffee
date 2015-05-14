KioskEvents = new EventEmitter()

KioskEvents.keys =
  commandTooltipShow: -> 'command:tooltip:show'
  commandTooltipHide: -> 'command:tooltip:hide'

module.exports = KioskEvents