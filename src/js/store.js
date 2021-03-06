import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(
  createLogger(),
  routerMiddleware(history),
  sagaMiddleware
));

sagaMiddleware.run(rootSaga);

export default store;
