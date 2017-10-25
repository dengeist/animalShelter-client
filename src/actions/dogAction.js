import { REACT_APP_API_BASE_URL as API_BASE_URL } from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_dog_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const fetchdog = () => dispatch => {
  fetch(`${API_BASE_URL}/dogs`)
      .then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      })
      .then(dog => {
          dispatch(fetchDogSuccess(dog));
      });
};