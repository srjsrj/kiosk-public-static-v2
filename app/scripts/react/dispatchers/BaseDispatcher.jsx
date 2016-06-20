import Flux from 'flux';

class BaseDispatcher extends Flux.Dispatcher {

  handleViewAction(action) {
    return this.dispatch({ source: 'VIEW_ACTION', action });
  }

  handleServerAction(action) {
    return this.dispatch({ source: 'SERVER_ACTION', action });
  }
}

export default BaseDispatcher;
