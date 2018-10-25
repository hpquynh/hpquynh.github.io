import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
function configDevStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
}

export default configDevStore();
sagaMiddleware.run(sagas);
