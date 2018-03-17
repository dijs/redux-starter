import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

export default function configureStore() {
  const reducer = combineReducers(require('./reducers').default);
  const store = createStore(reducer, applyMiddleware(thunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = combineReducers(require('./reducers').default);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
