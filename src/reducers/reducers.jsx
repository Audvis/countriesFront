import {
  SET_LOADING,
  GET_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRY_ACTIVITIES,
  GET_ACTIVITIES,
  GET_COUNTRIES_ACTIVITY,
  GET_SEARCH,
  SET_SWITCH_SIDE_BAR,
  SET_FILTER_BY,
  SET_FILTER_ORDER,
  SET_FILTER_CONTINENT,
  SET_FILTER_ACTIVITY,
  SET_COUNTRIES_ACTIVITY
} from "../actions/actions";

const initialState = {
  stateLoading: true,
  stateSwitchSideBar:false,
  stateFilterBy: true,
  stateFilterOrder: true,
  stateFilterContinent: 'All',
  stateFilterActivity: 'All',
  countriesList: {},
  countryDetails: {},
  activitiesList: {},
  activitiesCountry: {},
  countriesActivity:[{name:'not found', continent:'Other',population:100, key:'state'}],
  search:{},
};

function rootReducer(state = initialState, action) {
  //*loading
  if (action.type === SET_LOADING) {
    return {
      ...state,
      stateLoading: action.payload,
    };
  }
  //*get data
  if (action.type === GET_COUNTRIES) {
    return {
      ...state,
      countriesList: action.payload,
    };
  }
  if (action.type === GET_COUNTRY_DETAILS) {
    return {
      ...state,
      countryDetails: action.payload,
    };
  }
  if (action.type === GET_ACTIVITIES) {
    return {
      ...state,
      activitiesList: action.payload,
    };
  }
  if (action.type === GET_COUNTRY_ACTIVITIES) {
    return {
      ...state,
      activitiesCountry: action.payload,
    };
  }
  if (action.type === GET_COUNTRIES_ACTIVITY) {
    return {
      ...state,
      countriesActivity: action.payload,
    };
  }
  if (action.type === GET_SEARCH) {
    return {
      ...state,
      search: action.payload,
    };
  }
  if (action.type === SET_SWITCH_SIDE_BAR) {
    return {
      ...state,
      stateSwitchSideBar: action.payload,
    };
  }
  if (action.type === SET_FILTER_BY) {
    return {
      ...state,
      stateFilterBy: action.payload,
    };
  }
  if (action.type ===  SET_FILTER_ORDER) {
    return {
      ...state,
      stateFilterOrder: action.payload,
    };
  }
  if (action.type ===  SET_FILTER_CONTINENT) {
    return {
      ...state,
      stateFilterContinent: action.payload,
    };
  }
  if (action.type ===  SET_FILTER_ACTIVITY) {
    return {
      ...state,
      stateFilterActivity: action.payload,
    };
  }
  if (action.type ===    SET_COUNTRIES_ACTIVITY) {
    return {
      ...state,
      countriesActivity: action.payload,
    };
  }

  return state;
}

export default rootReducer;
