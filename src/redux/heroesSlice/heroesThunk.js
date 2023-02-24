import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

export const getHeroesThunk = createAsyncThunk(
  'heroes/fetchHeroes',
  async () => {
    const { request } = useHttp();
    return await request('http://localhost:3001/heroes');
  }
);

export const heroesDeleteThunk = createAsyncThunk(
  'heroes/heroDelete',
  async id => {
    const { request } = useHttp();
    await request(`http://localhost:3001/heroes/${id}`, 'DELETE');
    return id;
  }
);

export const heroesCreateThunk = createAsyncThunk(
  'heroes/heroCreate',
  async body => {
    const { request } = useHttp();
    return await request('http://localhost:3001/heroes', 'POST', body);
  }
);
