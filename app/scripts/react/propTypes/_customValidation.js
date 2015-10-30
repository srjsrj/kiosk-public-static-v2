// TODO: JUST EXAMPLE

// function stringChecker(props, propName, componentName, location) {
//   componentName = componentName || 'ANONYMOUS';

//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string') {
//         return value.length <= 140 ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
//     }
//   }

//   // assume all ok
//   return null;
// }



// // Equivalent of `typeof` but with special handling for array and regexp.
// function getPropType(propValue) {
//   var propType = typeof propValue;
//   if (Array.isArray(propValue)) {
//     return 'array';
//   }
//   if (propValue instanceof RegExp) {
//     // Old webkits (at least until Android 4.0) return 'function' rather than
//     // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
//     // passes PropTypes.object.
//     return 'object';
//   }
//   return propType;
// }

// // This handles more types than `getPropType`. Only used for error messages.
// // See `createPrimitiveTypeChecker`.
// function getPreciseType(propValue) {
//   var propType = getPropType(propValue);
//   if (propType === 'object') {
//     if (propValue instanceof Date) {
//       return 'date';
//     } else if (propValue instanceof RegExp) {
//       return 'regexp';
//     }
//   }
//   return propType;
// }


// class Widget extends React.Component {
//   render () {
//     return (
//       <div className="widget">
//         <h1 ref="title" className="widget__title">{this.props.title}</h1>
//         <div ref="content" className="widget__content">{this.props.content}</div>
//       </div>
//     )
//   }

// }

// let tweetLength = createChainableTypeChecker(tweetLengthChecker);

// Widget.propTypes = {
//   title: tweetLength.isRequired,
//   content: React.PropTypes.node.isRequired
// }

// function tweetLengthChecker(props, propName, componentName, location) {
//   componentName = componentName || 'ANONYMOUS';

//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string') {
//         return value.length <= 140 ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
//     }
//   }

//   // assume all ok
//   return null;
// }

// function createChainableTypeChecker(validate) {
//   function checkType(isRequired, props, propName, componentName, location) {
//     componentName = componentName || ANONYMOUS;
//     if (props[propName] == null) {
//       var locationName = ReactPropTypeLocationNames[location];
//       if (isRequired) {
//         return new Error(
//           ("Required " + locationName + " `" + propName + "` was not specified in ") +
//           ("`" + componentName + "`.")
//         );
//       }
//       return null;
//     } else {
//       return validate(props, propName, componentName, location);
//     }
//   }

//   let chainedCheckType = checkType.bind(null, false);
//   chainedCheckType.isRequired = checkType.bind(null, true);

//   return chainedCheckType;
// }

// let shortTitle = "This is a short title";
// let longTitle = "This is a very long title that is hugely over the 140 character limit imposed by our lovely new validator. Notice that a warn is generated, but we actually still see the rendered output as React choses to warn rather than throw the exception.";

// let shortContainer = document.getElementById('short');
// let longContainer = document.getElementById('long');


// React.render(<Widget title={shortTitle} content="This is our content" />, shortContainer);
// React.render(<Widget title={longTitle} content="This is our content" />, longContainer);