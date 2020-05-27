export const getTotalCount = ({ starshipsInBasket }) => _.sumBy((o) => o.count, starshipsInBasket)

export const getAllStarshipsInBasket = state => state.starshipsInBasket

export const isStarshipInBasket = (state) => (name) => _.compose(
  Boolean,
  _.find(name),
  getAllStarshipsInBasket
)(state)