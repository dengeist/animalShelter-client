import { REACT_APP_API_BASE_URL } from './config';

export const ADOPT_PET_SUCCESS = 'ADOPT_PET_SUCCESS';
export const adoptPetSuccess = (species) => ({
  type: ADOPT_PET_SUCCESS,
  species
});

export const adoptPet = (species) => dispatch => {
  console.log('adopt pet');

  fetch(`${REACT_APP_API_BASE_URL}/${species}`, {method: 'DELETE'})
    .then(res => {
      if (!res.ok) {
        console.log('error adopting pet');
        return Promise.reject(res.statusText);
      }
      return res.statusText;
    })
    .then(cat => {
      console.log('dispatching adoptPetSuccess');
      dispatch(adoptPetSuccess(species));
    })
    .then(() => {
      if (species === 'cat') {
        dispatch(fetchCat())
      }
      if (species === 'dog') {
        dispatch(fetchDog());
      }
    });
};

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const fetchCat = () => dispatch => {
  console.log('cat fetch');
  fetch(`${REACT_APP_API_BASE_URL}/cat`)
    .then(res => {
      if (!res.ok) {
        console.log('error fetching cat');
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      console.log('dispatching fetCatSuccess');
      dispatch(fetchCatSuccess(cat));
    });
};

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const fetchDog = () => dispatch => {
  fetch(`${REACT_APP_API_BASE_URL}/dog`)
    .then(res => {
      if (!res.ok) {
        console.log('error fetching dog')
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => {
      console.log('dispatching fetchDogSuccess')
      dispatch(fetchDogSuccess(dog));
    });
};
