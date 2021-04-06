
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
const initialState = {};
export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
