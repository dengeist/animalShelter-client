import {
  ADOPT_PET_REQUEST,
  ADOPT_PET_SUCCESS,
  ADOPT_PET_ERROR,
  FETCH_PET_REQUEST,
  FETCH_PET_ERROR,
  FETCH_PET_SUCCESS
} from './actions';

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

export default function reducers(state = initialState, action) {
  if (action.type === ADOPT_PET_REQUEST) {
    return Object.assign({}, state, {
      [action.species]: {
        error: null,
        loading: true
      }
    });
  }

  if (action.type === ADOPT_PET_ERROR) {
    return Object.assign({}, state, {
      [action.species]: {
        error: action.error,
        loading: false
      }
    });
  }

  if (action.type === ADOPT_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: { data: null }
    });
  }

  if (action.type === FETCH_PET_REQUEST) {
    return Object.assign({}, state, {
      [action.species]: {
        error: null,
        loading: true
      }
    });
  }

  if (action.type === FETCH_PET_ERROR) {
    return Object.assign({}, state, {
      [action.species]: {
        error: action.error,
        loading: false
      }
    });
  }

  if (action.type === FETCH_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: { data: action.pet }
    });
  }

  return state;
}
