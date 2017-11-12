import { ADOPT_PET_SUCCESS, FETCH_PET_SUCCESS } from './actions';

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
  if (action.type === FETCH_PET_SUCCESS) {
    return Object.assign({}, state, {
      [action.species]: action.pet
    });
  }

  return state;
}
