import { createSlice } from '@reduxjs/toolkit';
import {
  getHeroesThunk,
  heroesCreateThunk,
  heroesDeleteThunk,
} from './heroesThunk';

const heroesSlice = createSlice({
  name: 'heroes',
  initialState: {
    heroes: [],
    heroesLoadingStatus: 'idle',
    active: 'all',
  },
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
      state.heroes = action.payload;
    });
    builder.addCase(getHeroesThunk.rejected, state => {
      state.heroesLoadingStatus = 'error';
    });

    builder.addCase(heroesCreateThunk.fulfilled, (state, action) => {
      state.heroes.concat([action.payload]);
    });
    builder.addCase(heroesCreateThunk.rejected, state => {
      state.heroesLoadingStatus = 'error';
    });

    builder.addCase(heroesDeleteThunk.fulfilled, (state, action) => {
      state.heroes.filter(({ id }) => id !== action.payload);
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
