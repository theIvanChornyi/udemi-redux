import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from '../../actions';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import './HeroesList.scss';
import { filtredHeroesSelector, heroesStatus } from '../../selectors';

const HeroesList = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const heroesLoadingStatus = useSelector(heroesStatus);
  const filtredHeroes = useSelector(filtredHeroesSelector);

  useEffect(() => {
    dispatch(heroesFetching());
    request('http://localhost:3001/heroes')
      .then(data => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);

  if (heroesLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = arr => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return (
      <TransitionGroup>
        {arr.map(({ id, ...props }) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <HeroesListItem id={id} {...props} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  };

  const elements = renderHeroesList(filtredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
