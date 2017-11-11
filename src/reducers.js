import { FETCH_CAT_SUCCESS, FETCH_DOG_SUCCESS  } from './actions';

const initialState = {
  cat: {},
  dog: {}
};

export default function reducers(state=initialState, action) {

  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat
    })
  }
  
  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: action.dog
    })
  }
  
  return state;
}