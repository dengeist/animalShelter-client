import { API_BASE_URL } from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_dog_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const fetchDog = () => dispatch => {
  fetch(`${API_BASE_URL}/dog`)
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