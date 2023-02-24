import { createSlice } from '@reduxjs/toolkit';
import { getFiltersThunk } from './filtersThunk';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    LoadingStatus: 'idle',
    filters: [],
  },

  extraReducers: builder => {
    builder.addCase(getFiltersThunk.pending, state => {
      state.LoadingStatus = 'loading';
    });
    builder.addCase(getFiltersThunk.fulfilled, (state, action) => {
      state.LoadingStatus = 'idle';
      state.filters = action.payload;
    });
    builder.addCase(getFiltersThunk.rejected, state => {
      state.LoadingStatus = 'error';
    });
    builder.addDefaultCase(() => {});
  },
});

const { reducer } = filtersSlice;

export default reducer;
