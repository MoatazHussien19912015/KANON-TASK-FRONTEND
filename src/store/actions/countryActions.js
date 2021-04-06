import axios from "axios";
import {
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
  SEARCH_COUNTRIES_REQUEST,
  SEARCH_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
} from "../types/countries";

const getCountry = (countryName) => (dispatch) => {
  dispatch({ type: GET_COUNTRY_REQUEST });
  axios
    .get(`/countries/get-country/${countryName}`)
    .then((response) => {
      dispatch({ type: GET_COUNTRY_SUCCESS, payload: response.data.result[0] });
    })
    .catch((err) => {
      console.log(JSON.stringify(err.response));
      dispatch({
        type: GET_COUNTRY_FAIL,
        payload: err.response.data.message.message,
      });
    });
};

const searchCountries = (countryNames) => (dispatch) => {
  dispatch({ type: SEARCH_COUNTRIES_REQUEST });
  axios
    .get(`/countries/search-countries/${countryNames}`)
    .then((response) => {
      dispatch({
        type: SEARCH_COUNTRIES_SUCCESS,
        payload: response.data.countries,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_COUNTRIES_FAIL,
        payload: err.response.data.message.message,
      });
    });
};

const getAllCountries = () => (dispatch) => {
  dispatch({ type: GET_ALL_COUNTRIES_REQUEST });
  axios
    .get(`/countries/get-all-countries`)
    .then((response) => {
      dispatch({
        type: GET_ALL_COUNTRIES_SUCCESS,
        payload: response.data.countries,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_COUNTRIES_FAIL,
        payload: err.response.data.message.message,
      });
    });
};

export { getCountry, searchCountries, getAllCountries };
