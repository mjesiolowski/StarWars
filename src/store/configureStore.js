import { createStore, combineReducers } from 'redux';
import { basketReducer } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      basket: basketReducer,
    }),
    /*eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );

  return store;
};
