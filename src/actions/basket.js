import {
  ADD_STARSHIP,
  UPDATE_STARSHIP,
} from './constants';

export const addStarship = ({ name, count, price }) => ({
  type: ADD_STARSHIP,
  payload: {
    name,
    count,
    price,
  },
});


export const updateStarship = ({ name, count }) => ({
  type: UPDATE_STARSHIP,
  payload: {
    name,
    count,
  },
});
