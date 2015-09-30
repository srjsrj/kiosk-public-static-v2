window.BasketButton = React.createClass
  propTypes:
    # Если количество не установлено, то оно берется из BasketStore
    itemsCount: React.PropTypes.number
    cartText:   React.PropTypes.string
    cartUrl:    React.PropTypes.string.isRequired

  getDefaultProps: ->
    cartUrl: "/cart.html"

  getInitialState: ->
    itemsCount: @props.itemsCount || BasketStore.getBasketCount()

  componentDidMount: ->
    #+`react_ujs` will also scan DOM elements and call `React.unmountComponentAtNode` on page unload. If you want to disable this behavior (if you are not using Turbolinks), remove `data-react-class` attribute in `componentDidMount`:

    @getDOMNode().parentElement.removeAttribute('data-react-class')
    BasketStore.addChangeListener @_onChange

  componentDidUnmount: ->
    BasketStore.removeChangeListener @_onChange

  _onChange: ->
    @setState itemsCount: BasketStore.getBasketCount()

  render: ->
    if @state.itemsCount
      return <BasketButton_Full cartUrl={this.props.cartUrl} cartText={this.props.cartText} itemsCount={this.state.itemsCount}/>
    else
      return <BasketButton_Empty cartUrl={this.props.cartUrl} cartText={this.props.cartText}/>

window.BasketButton_Full = React.createClass
  propTypes:
    itemsCount: React.PropTypes.number.isRequired
    cartUrl:    React.PropTypes.string.isRequired
    cartText:   React.PropTypes.string.isRequired

  render: ->
    cartText = if @props.cartText? and @props.cartText != ''
                 <span className='b-cart-trigger__text'>{@props.cartText}</span>
               else
                 ''

    return <a className='b-cart-trigger b-cart-trigger_full element--active-opacity' href={this.props.cartUrl}>
             {cartText}
             <span className='b-cart-trigger__count'>{this.props.itemsCount}</span>
           </a>

window.BasketButton_Empty = React.createClass
  propTypes:
    cartUrl:  React.PropTypes.string.isRequired
    cartText: React.PropTypes.string.isRequired

  render: ->
    cartText = if @props.cartText? and @props.cartText != ''
                 <span className='b-cart-trigger__text'>{@props.cartText}</span>
               else
                 ''

    return <a className='b-cart-trigger element--active-opacity' href={this.props.cartUrl}>
             {cartText}
           </a>
