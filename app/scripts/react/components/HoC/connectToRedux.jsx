import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default function(Component) {
  class ReduxConnection extends Component {
    render() {
      return (
        <Provider store={global.redux}>
          {() =>
            <Component {...this.props} />
          }
        </Provider>
      );
    }
  }
  return ReduxConnection;
}
