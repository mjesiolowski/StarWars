import { createStore, combineReducers } from 'redux';
import { starshipsInBasketReducer } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      starshipsInBasket: starshipsInBasketReducer,
    }),
    /*eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );

  return store;
};
