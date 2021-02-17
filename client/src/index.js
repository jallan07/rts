import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

// create the store for globalized state
let store = createStore(reducer);

// create the actions -- describes what we want to do
const SEARCH = () => {
  return { type: 'SEARCH' };
};

// create the reducer -- based on action called, it will change state
const reducer = (state = [], action) => {
  switch (action.type) {
    // if the SEARCH action is dispatched, then spread the new query to the globalized state (in store)
    case 'SEARCH':
      return [...state, { id: action.id, query: action.text }];
    // else, return the globalized state (in store) as it currently is
    default:
      return state;
  }
};

// dispatch -- actually sends the action to the reducer

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
