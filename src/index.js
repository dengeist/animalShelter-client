import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Dashboard from './components/Dashboard';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
  <Provider store={store}>
    <Dashboard />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
