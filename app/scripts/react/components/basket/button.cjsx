window.BasketButton = React.createClass
  propTypes:
    # Если количество не установлено, то оно берется из BasketStore
    itemsCount: React.PropTypes.number
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
    if @state.itemsCount > 0
      return <BasketButton_Full cartUrl={this.props.cartUrl} itemsCount={this.state.itemsCount}/>
    else
      return <BasketButton_Empty cartUrl={this.props.cartUrl}/>

window.BasketButton_Full = React.createClass
  propTypes:
    itemsCount: React.PropTypes.number.isRequired
    cartUrl:    React.PropTypes.string.isRequired

  render: ->
    return <a className='b-cart-trigger b-cart-trigger_full' href={this.props.cartUrl}><span className='b-cart-trigger__count'>{this.props.itemsCount}</span></a>

window.BasketButton_Empty = React.createClass
  propTypes:
    cartUrl: React.PropTypes.string.isRequired

  render: ->
    return <a className='b-cart-trigger' href={this.props.cartUrl}></a>
