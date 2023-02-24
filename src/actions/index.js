//<------FILTRATION------>

export const heroesFiltration = activeName => {
  return {
    type: 'HEROES_FILTRATION',
    payload: activeName,
  };
};

//<------FETCHING------>

export const heroesFetching = () => {
  return {
    type: 'HEROES_FETCHING',
  };
};

export const heroesFetched = heroes => {
  return {
    type: 'HEROES_FETCHED',
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR',
  };
};

//<------filters------>

export const filtersFetching = () => {
  return {
    type: 'FILTERS_FETCHING',
  };
};

export const filtersFetched = filters => {
  return {
    type: 'FILTERS_FETCHED',
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: 'FILTERS_FETCHING_ERROR',
  };
};

//<------DELETING------>

export const heroDelete = () => {
  return {
    type: 'HERO_DELETE',
  };
};

export const heroDeleted = id => {
  return {
    type: 'HERO_DELETED',
    payload: id,
  };
};

export const heroDeleteError = () => {
  return {
    type: 'HERO_DELETE_ERROR',
  };
};

//<------CREATING------>

export const heroCreate = () => {
  return {
    type: 'HERO_CREATE',
  };
};

export const heroCreated = hero => {
  return {
    type: 'HERO_CREATED',
    payload: hero,
  };
};

export const heroCreateError = () => {
  return {
    type: 'HERO_CREATE_ERROR',
  };
};
