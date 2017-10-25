import { REACT_APP_API_BASE_URL as API_BASE_URL } from 'config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = board => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const fetchCat = () => dispatch => {
  fetch(`${API_BASE_URL}/cats`)
      .then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      })
      .then(cat => {
          dispatch(fetchBoardSuccess(cat));
      });
};