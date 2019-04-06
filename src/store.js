import {createStore, combineReducers} from 'redux';
import database from './temp';
import mainReducer from './reducers.redux/mainReducer';
import { routerReducer } from 'react-router-redux';
export default function store(initialState={storage: database}) {
 return createStore(
   mainReducer,
   initialState,
 );
}