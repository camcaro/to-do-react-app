import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducerNewToDo from './reducerNewToDo';
import reducerModifyToDo from './reducerModifyToDo';

const allReducers = combineReducers({reducerNewToDo, reducerModifyToDo});

const store = createStore(allReducers, applyMiddleware(logger));

export default store;