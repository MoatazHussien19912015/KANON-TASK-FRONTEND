import {
  GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAIL, 
  SEARCH_COUNTRIES_REQUEST, SEARCH_COUNTRIES_SUCCESS, SEARCH_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_REQUEST, GET_ALL_COUNTRIES_SUCCESS, GET_ALL_COUNTRIES_FAIL
  } from './../types/countries';


   

  function getCountryReducer ( state = {
    loading: false,
    country: {},
    error: null
  }, action) {
    switch(action.type){
        case GET_COUNTRY_REQUEST: return { ...state, loading: true};
        case GET_COUNTRY_SUCCESS: return { ...state, loading: false, error: null, country: action.payload};
        case GET_COUNTRY_FAIL: return { ...state, loading: false, error: action.payload, country: {} };
        default: return state;
    }
  }

  function searchCountryReducer ( state = {
    loading: false,
    countries: [],
    error: null
  }, action) {
    switch(action.type){
        case SEARCH_COUNTRIES_REQUEST: return { ...state, loading: true};
        case SEARCH_COUNTRIES_SUCCESS: return { ...state, loading: false, countries: action.payload };
        case SEARCH_COUNTRIES_FAIL: return { ...state, loading: false, error: action.payload, countries:[] };
        default: return state;
    }
  }

  function getAllCountriesReducer ( state = {
    loading: false,
    countries: [],
    error: null
  }, action) {
    switch(action.type){
        case GET_ALL_COUNTRIES_REQUEST: return { ...state, loading: true};
        case GET_ALL_COUNTRIES_SUCCESS: return { ...state, loading: false, countries: action.payload };
        case GET_ALL_COUNTRIES_FAIL: return { ...state, loading: false, error: action.payload, countries:[] };
        default: return state;
    }
  }

  

 export {getCountryReducer, searchCountryReducer, getAllCountriesReducer};