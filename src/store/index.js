import { createStore, applyMiddleware, compose } from 'redux';

import { dataMiddleware } from '../middleware/data';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(dataMiddleware),
)

const store = createStore(reducer, enhancer);

export default store;
