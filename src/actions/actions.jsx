export const SET_LOADING = "SET_LOADING";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_COUNTRY_ACTIVITIES = "GET_COUNTRY_ACTIVITIES;";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_ACTIVITY = "GET_COUNTRIES_ACTIVITY";
export const GET_SEARCH = "GET_SEARCH";
export const SET_SWITCH_SIDE_BAR = "SET_SWITCH_SIDE_BAR";
export const SET_FILTER_BY = "SET_FILTER_BY";
export const SET_FILTER_ORDER = "SET_FILTER_ORDER";
export const SET_FILTER_CONTINENT = "SET_FILTER_CONTINENT";
export const SET_FILTER_ACTIVITY = "SET_FILTER_ACTIVITY";
export const SET_COUNTRIES_ACTIVITY = "SET_COUNTRIES_ACTIVITY";

const API = 'https://countriesback.herokuapp.com/' 

//*get data
export function getCountries(countries) {
  return { type: GET_COUNTRIES, payload: countries };
}
export function getCountryDetails(country) {
  return { type: GET_COUNTRY_DETAILS, payload: country };
}
export function getCountryActivities(activities) {
  return { type: GET_COUNTRY_ACTIVITIES, payload: activities };
}
export function getActivities(activities) {
  return { 
    type: GET_ACTIVITIES, payload: activities 
  };
}
export function getCountriesActivity(activity) {
  return { type: GET_COUNTRIES_ACTIVITY, payload: activity };
}
export function getSearch(country) {
  return { type: GET_SEARCH, payload: country };
}

//*Loading
//state loading home countries and country datails
export function setLoading(boolean) {
  return { type: SET_LOADING, payload: boolean };
}

//*switch
export function setSwitchSide(boolean) {
  return { type: SET_SWITCH_SIDE_BAR, payload: boolean };
}

export function setFilterBy(boolean) {
  return { type: SET_FILTER_BY, payload: boolean };
}
export function setFilterOrder(boolean) {
  return { type: SET_FILTER_ORDER, payload: boolean };
}
export function setFilterContinent(arg) {
  return { type: SET_FILTER_CONTINENT, payload: arg };
}
export function setFilterActivity(arg) {
  return { type: SET_FILTER_ACTIVITY, payload: arg };
}
// export function setCountriesActivity(name) {
//   return { type: SET_COUNTRIES_ACTIVITY, payload: name};
// }

export function setCountriesActivity(name){
  if(name === 'All'){
    const country = {name:'not found', continent:'Other',population:100, key:'state'}
    return { type: SET_COUNTRIES_ACTIVITY, payload: [country]};
  }else
  return function(dispatch) {
     fetch(`${API}${name}/countries`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SET_COUNTRIES_ACTIVITY, payload: json });
      });
  };
}

