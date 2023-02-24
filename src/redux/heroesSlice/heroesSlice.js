import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  getHeroesThunk,
  heroesCreateThunk,
  heroesDeleteThunk,
} from './heroesThunk';

export const heroesAdapter = createEntityAdapter();

const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: 'idle',
  active: 'all',
});

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    filtrationHeroes(state, action) {
      state.active = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getHeroesThunk.pending, state => {
      state.heroesLoadingStatus = 'loading';
    });
    builder.addCase(getHeroesThunk.fulfilled, (state, action) => {
      state.heroesLoadingStatus = 'idle';
      heroesAdapter.setAll(state, action.payload);
    });
    builder.addCase(getHeroesThunk.rejected, state => {
      state.heroesLoadingStatus = 'error';
    });

    builder.addCase(heroesCreateThunk.fulfilled, (state, action) => {
      heroesAdapter.addOne(state, action.payload);
    });
    builder.addCase(heroesCreateThunk.rejected, state => {
      state.heroesLoadingStatus = 'error';
    });

    builder.addCase(heroesDeleteThunk.fulfilled, (state, action) => {
      heroesAdapter.removeOne(state, action.payload);
    });
    builder.addCase(heroesDeleteThunk.rejected, state => {
      state.heroesLoadingStatus = 'error';
    });

    builder.addDefaultCase(() => {});
  },
});

const { reducer, actions } = heroesSlice;

export default reducer;
export const { filtrationHeroes } = actions;
