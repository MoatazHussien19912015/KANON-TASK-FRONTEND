/* import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, 
    LOGOUT_SUCCESS, LOGOUT_FAIL} from './../types/auth-types';
import axios from 'axios';
    
    export const register = (x) => (dispatch, getState) => {
        dispatch({type: REGISTER_REQUEST});
        axios.post(`/users/sign-up`,x).
        then(data => { //console.log(data);
            dispatch({type: REGISTER_SUCCESS, payload: data});
        })
        .catch(err=> { dispatch({type: REGISTER_FAIL, payload: err.response.data.message})});
    };

    export const login = (x) => (dispatch, getState) => {
        dispatch({type: LOGIN_REQUEST});
        axios.post(`/users/sign-in`,x).
        then(data => { //console.log(data);
            dispatch({type: LOGIN_SUCCESS, payload: data});
        })
        .catch(err=> { dispatch({type: LOGIN_FAIL, payload: err.response.data.message})});
    }; */

import {SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
    GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAIL} from './../types/auth-types';
    import {PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL} from './../types/play-types';
import axios from 'axios';
    export const signUp = (x) => (dispatch, getState) => {
        dispatch({type: SIGN_UP_REQUEST});
        axios.post(`/auth/sign-up`,x).
        then(response => { 
            dispatch({type: SIGN_UP_SUCCESS, payload: response.data.token});
            localStorage.setItem('token', JSON.stringify(response.data.token));
        })
        .catch(err=> { dispatch({type: SIGN_UP_FAIL, payload: err.response.data.message}); 
                        localStorage.removeItem('token');});
    };

    export const signIn = (x) => (dispatch, getState) => {
        dispatch({type: SIGN_IN_REQUEST});
        axios.post(`/auth/sign-in`,x).
        then(response => { 
            dispatch({type: SIGN_IN_SUCCESS, payload: response.data.token});
            localStorage.setItem('token',  JSON.stringify(response.data.token) );
            
        })
        .catch(err=> { dispatch({type: SIGN_IN_FAIL, payload: err.response.data.message});
                       localStorage.removeItem('token');       });
    };

    export const getProfile = () => (dispatch, getState) => { 
        dispatch({type: GET_PROFILE_REQUEST}); 
        if (JSON.parse(localStorage.getItem('user'))) {  
            dispatch({type: GET_PROFILE_SUCCESS, payload: {user: JSON.parse(localStorage.getItem('user'))}  });
        } else { 
            const config = {headers: {'Content-Type': 'application/json', 'x-auth': JSON.parse(localStorage.getItem('token'))}};
            axios.get(`/auth/profile`, config).
        then(response => { 
            dispatch({type: GET_PROFILE_SUCCESS, payload: response.data});
            localStorage.setItem('user', JSON.stringify(response.data.user));
        })
        .catch(err=> { dispatch({type: GET_PROFILE_FAIL, payload: err.response.data.message});
        localStorage.removeItem('user');});
        }
    };

    export const play = () => (dispatch, getState) => { 
        dispatch({type: PLAY_REQUEST}); 
        const config = {headers: {'Content-Type': 'application/json', 'x-auth': JSON.parse(localStorage.getItem('token'))}}
       
            axios.get(`/gaming/play`, config).
        then(response => {  console.log(response.data);
            dispatch({type: PLAY_SUCCESS, payload: response.data.payload});
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response.data.payload.user));
        })
        .catch(err=> { console.log(err); dispatch({type: PLAY_FAIL, payload: err.response.data.message});});
        
        
    };
    

    export const logOut = (x) => (dispatch, getState) => {
        dispatch({type: LOG_OUT_REQUEST});
        dispatch({type: LOG_OUT_SUCCESS});
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };