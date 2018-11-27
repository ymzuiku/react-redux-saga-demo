import React from 'react';
import { connect } from 'react-redux';
import types from './redux/types';

function App(props) {
  function handleAddCount() {
    props.addCount(10);
  }
  function handleFetchData() {
    props.sagaFetchUser();
  }
  function render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {props.count}
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <button onClick={handleAddCount}>add</button>
          <button onClick={handleFetchData}>fetch</button>
        </header>
      </div>
    );
  }
  return React.useMemo(render, [props]);
}

export default connect(
  ({ user }) => ({
    count: user.get('count'),
  }),
  dispatch => ({
    addCount(num) {
      dispatch({ type: types.userAddCount, payload: { count: num } });
    },
    sagaFetchUser(){
      dispatch({type: types.sagaFetchUser})
    }
  })
)(App);
