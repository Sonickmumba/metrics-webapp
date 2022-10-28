import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { countriesReducer } from './countries/countries';

const allReducers = combineReducers({
  countries: countriesReducer,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
