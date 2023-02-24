import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import './HeroesList.scss';
import {
  filtredHeroesSelector,
  heroesStatus,
} from '../../redux/heroesSlice/heroesSelector';
import { getHeroesThunk } from '../../redux/heroesSlice/heroesThunk';

const HeroesList = () => {
  const dispatch = useDispatch();
  const heroesLoadingStatus = useSelector(heroesStatus);
  const filtredHeroes = useSelector(filtredHeroesSelector);

  useEffect(() => {
    dispatch(getHeroesThunk());
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
