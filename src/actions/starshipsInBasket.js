import {
  ADD_STARSHIP,
  UPDATE_STARSHIP,
  REMOVE_STARSHIP,
} from './constants';

export const addStarship = ({ name, count, unitPrice }) => ({
  type: ADD_STARSHIP,
  payload: {
    name,
    count,
    unitPrice,
    totalPrice: unitPrice * count
  },
});


export const updateStarship = ({ name, count }) => ({
  type: UPDATE_STARSHIP,
  payload: {
    name,
    count,
  },
});

export const removeStarship = ({ name }) => ({
  type: REMOVE_STARSHIP,
  payload: {
    name,
  },
});

