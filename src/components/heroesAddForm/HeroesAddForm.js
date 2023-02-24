import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { filtersSelector } from '../../redux/filtersSlice/filtersSelector';

import { getFiltersThunk } from '../../redux/filtersSlice/filtersThunk';
import { heroesCreateThunk } from '../../redux/heroesSlice/heroesThunk';
import { schema } from '../../services/formValidate/schema';

const HeroesAddForm = () => {
  const filters = useSelector(filtersSelector);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    resolver: schema,
  });

  useEffect(() => {
    if (filters.length < 1) dispatch(getFiltersThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = ({ name, text, element }) => {
    const hero = {
      id: nanoid(),
      name,
      description: text,
      element,
    };
    const body = JSON.stringify(hero);
    dispatch(heroesCreateThunk(body));

    reset();
  };

  const filterItems = useMemo(
    () =>
      filters.map(({ name, title }) => (
        <option key={name} value={name}>
          {title ? title : 'Я владею элементом...'}
        </option>
      )),
    [filters]
  );

  return (
    <form
      className="border p-4 shadow-lg rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          {...register('name')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: '130px' }}
          {...register('text')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          {...register('element')}
        >
          {filterItems}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
