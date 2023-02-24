import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useCallback } from 'react';
import './HeroesFilters.scss';
import {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  heroesFiltration,
} from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import { activeHeroSelector, filtersSelector } from '../../selectors';

const HeroesFilters = () => {
  const filters = useSelector(filtersSelector);
  const active = useSelector(activeHeroSelector);

  const { request } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.length < 1) getFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilters = () => {
    filtersFetching();
    request('http://localhost:3001/filters')
      .then(d => dispatch(filtersFetched(d)))
      .catch(() => dispatch(filtersFetchingError()));
  };

  const handleSetActiveFilter = useCallback(
    e => {
      dispatch(heroesFiltration(e.target.dataset.type));
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
