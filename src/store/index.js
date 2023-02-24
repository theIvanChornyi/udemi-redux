import { combineReducers, createStore } from 'redux';
import { heroes, filters } from '../reducers';

const store = createStore(
  combineReducers({ heroes, filters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
