import React from "react";
import ReactDOM from "react-dom";
import initReactFastclick from 'react-fastclick';
import reduxAutoLocalStorage from 'redux-auto-local-storage'
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

reduxAutoLocalStorage(store, 'saga-test-local', ['user']);
initReactFastclick();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
