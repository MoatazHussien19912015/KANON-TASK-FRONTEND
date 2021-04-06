import {SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAIL} from './../types/auth-types';
import {PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL} from './../types/play-types';
function authReducer ( state = {
    loading: false,
    token: null,
    user: {},
    reel:[],
    result:0,
    error: null
  }, action) {
    switch(action.type){
        case SIGN_UP_REQUEST: return { ...state, loading: true};
        case SIGN_UP_SUCCESS: return { ...state, loading: false, error: null, token: action.payload};
        case SIGN_UP_FAIL: return { ...state, loading: false, error: action.payload, token: null };
        case SIGN_IN_REQUEST: return { ...state, loading: true};
        case SIGN_IN_SUCCESS: return { ...state, loading: false, error: null, token: action.payload};
        case SIGN_IN_FAIL: return { ...state, loading: false, error: action.payload, token: null };
        case GET_PROFILE_REQUEST: return { ...state, loading: true};
        case GET_PROFILE_SUCCESS: return { ...state, loading: false, error: null, user: action.payload.user};
        case GET_PROFILE_FAIL: return { ...state, loading: false, error: action.payload, user: {} };
        case PLAY_REQUEST: return { ...state, loading: true};
        case PLAY_SUCCESS: return { ...state, loading: false, reel: [...action.payload.arr], result: action.payload.result, user: action.payload.user};
        case PLAY_FAIL: return { ...state, loading: false, reel:[], result:0, error: action.payload};
        case LOG_OUT_REQUEST: return { ...state, loading: true};
        case LOG_OUT_SUCCESS: return { ...state, loading: false, error: null, user: {}, token: null};
        default: return state;
    }
  }

  export {authReducer};