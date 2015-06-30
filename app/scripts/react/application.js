import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';

// Unless we have no one common component, we will be pass <Provider /> global redux
// instance
global.redux = createRedux(stores);