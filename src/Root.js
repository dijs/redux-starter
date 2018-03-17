import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import configureStore from './configureStore';
import App from './App';

// Data connections + Hot Module Reloading
const mapState = state => ({
  count: state.count
})

// Thunk async example
const incrementAsync = (dispatch, getState) => {
  const { count } = getState();
  setTimeout(() => {
  	dispatch({ type: 'INCREMENT' });
  }, count % 2 === 0 ? 1000 : 3000);
};

const mapDispatch = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  incrementAsync: () => dispatch(incrementAsync)
})

const CountContainer = connect(mapState, mapDispatch)(App);

export default class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <CountContainer />
      </Provider>
    );
  }
}