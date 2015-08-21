import React from 'react';
import { Provider } from 'redux/react';

export default function(Component) {
  class ReduxConnection {
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