import { FETCH_CAT_SUCCESS } from '../actions/catAction';
import { FETCH_DOG_SUCCESS } from '../actions/dogAction';

const catToAdopt = {
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  name: 'Fluffy',
  gender: 'Female',
  age: '2 yrs',
  breed: 'Bengal',
  story: 'thrown on the street'
};
const dogToAdopt = {
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  name: 'June',
  gender: 'Female',
  age: '1 yrs',
  breed: 'Shiba',
  story: 'Rejected by mother'
};

const initialState = {
  cat: catToAdopt,
  dog: dogToAdopt
};

export default function petReducer(state=initialState, action) {

  if (action.type === FETCH_CAT_SUCCESS) {
    return action.cat;
  }
  
  if (action.type === FETCH_DOG_SUCCESS) {
    return action.dog;
  }
  
  return state;
}