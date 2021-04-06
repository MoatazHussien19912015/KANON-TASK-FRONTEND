import { combineReducers } from 'redux';
//import {userRegisterProducer, userLoginProducer} from './userReducer';
import {getCountryReducer, searchCountryReducer, getAllCountriesReducer } from './countryReducer';
import {authReducer } from './authReducer';
export default combineReducers({ getCountryReducer, searchCountryReducer, getAllCountriesReducer, authReducer});
