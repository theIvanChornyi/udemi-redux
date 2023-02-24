import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useCallback } from 'react';
import './HeroesFilters.scss';
import { getFiltersThunk } from '../../redux/filtersSlice/filtersThunk';
import { filtrationHeroes } from '../../redux/heroesSlice/heroesSlice';
import { filtersSelector } from '../../redux/filtersSlice/filtersSelector';
import { activeHeroSelector } from '../../redux/heroesSlice/heroesSelector';

const HeroesFilters = () => {
  const filters = useSelector(filtersSelector);
  const active = useSelector(activeHeroSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.length < 1) dispatch(getFiltersThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetActiveFilter = useCallback(
    e => {
      dispatch(filtrationHeroes(e.target.dataset.type));
    },
    [dispatch]
  );

  const filterBtns = useMemo(
    () =>
      filters.map(({ name, title, class: className }) => (
        <button
          onClick={handleSetActiveFilter}
          key={name}
          data-type={name}
          className={classNames('btn', {
            [className]: className,
            active: active === name,
          })}
        >
          {title ? title : 'Все'}
        </button>
      )),
    [active, filters, handleSetActiveFilter]
  );

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">{filterBtns}</div>
      </div>
    </div>
  );
};

export default HeroesFilters;
