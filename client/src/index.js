import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers';

// redux store
import { createStore } from 'redux';
const store = createStore(reducer);

// display in console
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
