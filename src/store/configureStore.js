import { createStore, combineReducers } from 'redux';
import { starshipsInBasketReducer } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      starshipsInBasket: starshipsInBasketReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
