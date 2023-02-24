const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  active: 'all',
};

const reducer = (state = initialState, action) => {
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

    //<------filters------>

    case 'FILTERS_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
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
        heroesLoadingStatus: 'loading',
      };
    case 'HERO_CREATED':
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        heroesLoadingStatus: 'idle',
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

export default reducer;
