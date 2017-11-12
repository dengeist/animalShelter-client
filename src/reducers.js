import {
  ADOPT_PET_SUCCESS,
  FETCH_CAT_SUCCESS,
  FETCH_DOG_SUCCESS
} from './actions';

const initialState = {
  cat: null,
  dog: null
};

export default function reducers(state = initialState, action) {
  if (action.type === ADOPT_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: null
    });
  }

  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat
    });
  }

  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: action.dog
    });
  }

  return state;
}
