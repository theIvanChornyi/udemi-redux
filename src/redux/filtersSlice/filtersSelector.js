import { filterAdapter } from './filtersSlice';

const filterSelectors = filterAdapter.getSelectors(state => state.filters);

export const filtersSelector = filterSelectors.selectAll;
