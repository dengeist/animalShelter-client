import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import AdoptAPet from './components/AdoptionList';

import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import petReducer from './reducers/petReducer.js';

const store = createStore(petReducer, applyMiddleware(thunk));

ReactDOM.render(
  (
  <Provider store={store}>
    <AdoptAPet />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
