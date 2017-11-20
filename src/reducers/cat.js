import {
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR,
  ADOPT_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR,
  FETCH_CAT_SUCCESS
} from '../actions/';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default (state=initialState, action) => {
  if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  }

  if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if (action.type === ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
      loading: false
    });
  }

  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  }

  if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false
    });
  }

  return state;
};
