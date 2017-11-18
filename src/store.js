import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/';

const initialState = {
  cat: {
    data: null,
    error: null,
    loading: false
  },
  dog: {
    data: null,
    error: null,
    loading: false
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
