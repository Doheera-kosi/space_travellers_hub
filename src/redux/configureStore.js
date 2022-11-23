import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
});

const store = configureStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
