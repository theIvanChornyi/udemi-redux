import { filterAdapter } from './filtersSlice';

const { selectAll: filtersSelector } = filterAdapter.getSelectors(
  state => state.filters
);

export { filtersSelector };
