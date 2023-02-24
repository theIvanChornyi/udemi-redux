import { createSelector } from '@reduxjs/toolkit';
import { heroesAdapter } from './heroesSlice';

const heroesSelectors = heroesAdapter.getSelectors(state => state.heroes);

export const heroesSelector = heroesSelectors.selectAll;
export const heroesStatus = state => state.heroes.heroesLoadingStatus;
export const activeHeroSelector = state => state.heroes.active;

export const filtredHeroesSelector = createSelector(
  [heroesSelector, activeHeroSelector],
  (heroes, active) =>
    heroes.filter(({ element }) =>
      active === 'all' ? true : element === active
    )
);
