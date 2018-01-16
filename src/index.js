import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import './css/nav.css';
import './css/games.css';
import './css/forms.css';

import store from './store'
import { Provider } from 'react-redux'
import { fetchChallenges } from './actions'

// 1. initialize data, then go to actions/index.js
store.dispatch(fetchChallenges())

// start our application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
