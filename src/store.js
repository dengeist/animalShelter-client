import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import petReducer from './reducers/petReducer';

export default createStore(petReducer, applyMiddleware(thunk));