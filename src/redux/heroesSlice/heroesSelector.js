import { createSelector } from '@reduxjs/toolkit';
import { heroesAdapter } from './heroesSlice';

const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);

export const heroesSelector = selectAll;
export const heroesStatus = state => state.heroes.heroesLoadingStatus;
export const activeHeroSelector = state => state.heroes.active;

export const filtredHeroesSelector = createSelector(
  [selectAll, activeHeroSelector],
  (heroes, active) =>
    heroes.filter(({ element }) =>
      active === 'all' ? true : element === active
    )
);
