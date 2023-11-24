import { legacy_createStore, applyMiddleware } from 'redux';

import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(reducer, applyMiddleware(reduxLogger, sagaMiddleware, reduxThunk, reduxPromise));

sagaMiddleware.run(saga);

export default store;
