export const getTotalCount = ({ starshipsInBasket }) => _.sumBy((starship) => parseInt(starship.count, 10), starshipsInBasket);

export const getAllStarshipsInBasket = (state) => state.starshipsInBasket;

export const isStarshipInBasket = (state) => (name) => _.compose(
  Boolean,
  _.find(name),
  getAllStarshipsInBasket,
)(state);

export const getStarshipCountInBasket = (state) => (name) => _.compose(
  _.get('count'),
  _.find(name),
  getAllStarshipsInBasket,
)(state);
