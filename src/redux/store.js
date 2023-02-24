import heroes from './heroesSlice/heroesSlice';
import filters from './filtersSlice/filtersSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { heroes, filters },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
