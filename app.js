import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Root from './src/js/routes';
import reducers from './src/js/reducers';
import rootSaga from './src/js/sagas';

const sagaMiddleware = createSagaMiddleware();
const STORE = createStore(reducers, applyMiddleware(createLogger(), sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(<Root store={STORE} />, document.getElementById('flexContainer'));
