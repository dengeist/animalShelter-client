import { REACT_APP_API_BASE_URL as API_BASE_URL } from 'config';

export const FETCH_dog_SUCCESS = 'FETCH_dog_SUCCESS';
export const fetchdogSuccess = board => ({
    type: FETCH_dog_SUCCESS,
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
          dispatch(fetchBoardSuccess(dog));
      });
};