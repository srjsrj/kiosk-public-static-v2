require('./dist/scripts/public.prerender.development');

console.log(ReactDOMServer.renderToString(
  React.createElement(CartContainer, CartContainerProps)
));
