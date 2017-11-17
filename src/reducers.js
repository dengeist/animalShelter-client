import { ADOPT_PET_SUCCESS, FETCH_PET_SUCCESS } from './actions';

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
  if (action.type === ADOPT_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: {data: null}
    });
  }
  if (action.type === FETCH_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: {data: action.pet}
    });
  }

  return state;
}
