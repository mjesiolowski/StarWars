import { ADD_STARSHIP, UPDATE_STARSHIP } from '../actions';


export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STARSHIP:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_STARSHIP:
      return state.map((starship) => {
        if (starship.name === action.payload.name) {
          return {
            ...starship,
            count: starship.count + action.payload.count,
          };
        }
        return starship;
      });

    default:
      return state;
  }
};
