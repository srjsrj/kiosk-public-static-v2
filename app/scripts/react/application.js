import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';

// Bootstraping serverside data
let data = {};
if (global.gon.__data) {
  const { design } = global.gon.__data;

  data = {
    design: {
      current: design,
      currentSaved: design,
      unsavedFields: {},
      isSaving: false
    }
  };
}

// Unless we have no one common component, we will be pass <Provider /> global redux
// instance
global.redux = createRedux(stores, data);