import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

export const getFiltersThunk = createAsyncThunk(
  'heroes/fetchFilters',
  async () => {
    const { request } = useHttp();
    return await request('http://localhost:3001/filters');
  }
);
