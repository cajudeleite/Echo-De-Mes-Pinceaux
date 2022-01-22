import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers();

// const store = createStore(reducer, enhancer);

const store = createStore(reducer);

export default store;
