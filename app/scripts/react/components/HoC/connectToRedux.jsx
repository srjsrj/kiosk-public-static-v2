import React, { Component } from 'react';
import { Provider } from 'redux/react';

export default function(Component) {
  class ReduxConnection extends Component {
    render() {
      return (
        <Provider redux={global.redux}>
          {() =>
            <Component {...this.props} />
          }
        </Provider>
      );
    }
  }
  return ReduxConnection;
}