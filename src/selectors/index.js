import { createSelector } from 'reselect';

export const heroesSelector = state => state.heroes.heroes;
export const heroesStatus = state => state.heroes.heroesLoadingStatus;
export const activeHeroSelector = state => state.heroes.active;

export const filtredHeroesSelector = createSelector(
  [heroesSelector, activeHeroSelector],
  (heroes, active) =>
    heroes.filter(({ element }) =>
      active === 'all' ? true : element === active
    )
);

export const filtersSelector = state => state.filters.filters;
