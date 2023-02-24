const heroesInitialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  active: 'all',
};
const filtersInitialState = {
  LoadingStatus: 'idle',
  filters: [],
};

export const heroes = (state = heroesInitialState, action) => {
  switch (action.type) {
    //<------FILTRATION------>
    case 'HEROES_FILTRATION':
      return {
        ...state,
        active: action.payload,
      };

    //<------FETCHING------>

    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };

    //<------DELETING------>

    case 'HERO_DELETE':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HERO_DELETED':
      return {
        ...state,
        heroes: [...state.heroes].filter(({ id }) => id !== action.payload),
        heroesLoadingStatus: 'idle',
      };
    case 'HERO_DELETE_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };

    //<------CREATING------>

    case 'HERO_CREATE':
      return {
        ...state,
      };
    case 'HERO_CREATED':
      return {
        ...state,
        heroes: state.heroes.concat([action.payload]),
      };
    case 'HERO_CREATE_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };

    default:
      return state;
  }
};

export const filters = (state = filtersInitialState, action) => {
  switch (action.type) {
    //<------FETCHING------>

    case 'FILTERS_FETCHING':
      return {
        ...state,
        LoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        LoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        LoadingStatus: 'error',
      };

    default:
      return state;
  }
};
