import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// redux
import store from './store';
import { Provider } from 'react-redux';

// display in console
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  // provider gives state access to the entire app
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
