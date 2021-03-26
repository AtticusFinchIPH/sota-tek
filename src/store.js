import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './reducers/taskReducer';

const initialState = { tasks: JSON.parse(localStorage.getItem('tasks')) || [] };

const reducer = combineReducers({
    tasks: tasksReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;