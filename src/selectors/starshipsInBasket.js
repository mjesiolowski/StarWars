import { createSelector } from 'reselect';

export const getTotalCount = ({ starshipsInBasket }) => _.sumBy((o) => o.count, starshipsInBasket)

export const getAllStarshipsInBasket = state => state.starshipsInBasket
