import { ADD_STARSHIP, UPDATE_STARSHIP, REMOVE_STARSHIP } from '../actions';


export const starshipsInBasketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STARSHIP:
      return [
        ...state,
        action.payload,
      ];

    case UPDATE_STARSHIP:
      return state.map((starship) => {
        if (starship.name === action.payload.name) {
          const updatedCount = starship.count + action.payload.count
          return {
            ...starship,
            count: updatedCount,
            totalPrice: updatedCount * starship.unitPrice
          };
        }
        return starship;
      });

    case REMOVE_STARSHIP:
      return state.filter(starship => starship.name === action.payload.name)

    default:
      return state;
  }
};
