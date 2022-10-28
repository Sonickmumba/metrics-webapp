// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getByContinent, getByCountry } from './api';

const LOAD_COUNTRIES = 'cases/LOAD_COUNTRIES';
const LOAD_COUNTRY = 'cases/LOAD_COUNTRY';

export const showCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const showCountry = (payload) => ({
  type: LOAD_COUNTRY,
  payload,
});

export const fetchCountryFromAPi = (name) => async (dispatch) => {
  // dispatch(showLoading());
  const data = await getByCountry(name);

  dispatch(showCountry(data));
  // dispatch(hideLoading());
};

export const fetchCountriesFromAPI = (continent) => async (dispatch) => {
  // dispatch(showLoading());
  const oneContinent = await getByContinent(continent);

  const data = Object.values(oneContinent).reduce((accumulator, currentValue) => {
    const { All: { country, confirmed } } = currentValue;

    accumulator.items.push({ name: country, confirmed });
    accumulator.totalConfirmed += confirmed;

    return accumulator;
  }, {
    totalConfirmed: 0,
    items: [],
  });

  data.items = data.items.sort((a, b) => b.confirmed - a.confirmed);

  dispatch(showCountries(data));
  // dispatch(hideLoading());
};

const initialState = {
  totalConfirmed: 0,
  items: [],
  selected: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return action.payload;
    case LOAD_COUNTRY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default countriesReducer;
