import { REACT_APP_API_BASE_URL } from './config';

/** --------------------------- GETTING A PET ----------------------------- **/

/**
 * Makes a GET requerst to show an animal in shelter.
 * @param {string} species - The animal to look at. Either 'cat' or 'dog'.
 */
export const fetchPet = species => dispatch => {
  console.log(`Attempting to fetch a ${species}`);
  dispatch(fetchPetRequest(species));

  fetch(`${REACT_APP_API_BASE_URL}/${species}`)
    .then(res => {
      if (!res.ok) {
        console.log(`error fetching the ${species}!`);
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(pet => {
      console.log(`Got a ${species}! Dispatching fetchPetSuccess`);
      dispatch(fetchPetSuccess(pet, species));
    })
    .catch(error => fetchPetError(error, species));
};

export const FETCH_PET_REQUEST = 'FETCH_PET_REQUEST';
export const fetchPetRequest = species => ({
  species,
  type: FETCH_PET_REQUEST
});

export const FETCH_PET_ERROR = 'FETCH_PET_ERROR';
export const fetchPetError = (error, species) => ({
  error,
  species,
  type: FETCH_PET_ERROR
});

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
export const fetchPetSuccess = (pet, species) => ({
  pet,
  species,
  type: FETCH_PET_SUCCESS
});

/** --------------------------- DELETING A PET ----------------------------- **/

/**
 * Makes a DELETE requerst to remove an animal from the shelter.
 * @param {string} species - The animal being adopted out. Either 'cat' or 'dog'.
 */
export const adoptPet = species => dispatch => {
  console.log('adopt pet');
  dispatch(adoptPetRequest(species));

  fetch(`${REACT_APP_API_BASE_URL}/${species}`, { method: 'DELETE' })
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
    .then(() => dispatch(fetchPet(species)))
    .catch(error => adoptPetError(error, species));
};

export const ADOPT_PET_REQUEST = 'ADOPT_PET_REQUEST';
export const adoptPetRequest = species => ({
  species,
  type: ADOPT_PET_REQUEST
});
export const ADOPT_PET_SUCCESS = 'ADOPT_PET_SUCCESS';
export const adoptPetSuccess = species => ({
  species,
  type: ADOPT_PET_SUCCESS
});

export const ADOPT_PET_ERROR = 'ADOPT_PET_ERROR';
export const adoptPetError = species => ({
  species,
  type: ADOPT_PET_ERROR
});
