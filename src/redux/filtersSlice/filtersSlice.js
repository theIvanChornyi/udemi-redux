import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getFiltersThunk } from './filtersThunk';

export const filterAdapter = createEntityAdapter({
  selectId: filter => filter.name,
});
const initialState = filterAdapter.getInitialState({ LoadingStatus: 'idle' });

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  extraReducers: builder => {
    builder.addCase(getFiltersThunk.pending, state => {
      state.LoadingStatus = 'loading';
    });
    builder.addCase(getFiltersThunk.fulfilled, (state, action) => {
      state.LoadingStatus = 'idle';
      filterAdapter.setAll(state, action.payload);
    });
    builder.addCase(getFiltersThunk.rejected, state => {
      state.LoadingStatus = 'error';
    });
    builder.addDefaultCase(() => {});
  },
});

const { reducer } = filtersSlice;

export default reducer;
