import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSageMiddleware from 'redux-saga';
import * as reducers from './reducers';
import sagas from './sagas';

const sageMiddleware = createSageMiddleware();

const reduxTools = window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(sageMiddleware),
    reduxTools
  )
);

sageMiddleware.run(sagas);

export default store;