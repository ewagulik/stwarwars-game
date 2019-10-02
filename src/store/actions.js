import {
  FETCH_STARSHIP_SUCCESS,
  FETCH_STARSHIP_ERROR,
  CLEAR_STARSHIP_ERRORS,
  CLEAR_ACTIVE_STARSHIPS,
  SET_STARSHIP_TO_ACTIVE,
  SET_FETCHING,
  UPDATE_SCORE,
  SET_CATEGORY,
} from './types';
import { urlBase } from '../constants';

export const fetchStarshipsData = ids => {
  return async dispatch => {
    dispatch(isFetching(true));
    try {
      const apiCalls = ids.map(id => fetch(`${urlBase}${id}/`));
      const responses = await Promise.all(apiCalls);
      responses.map(async (response, i) => {
        if (response.ok) {
          const data = await response.json();
          dispatch(fetchStarshipSuccess(ids[i], data));
        } else {
          dispatch(fetchStarshipError);
        }
        dispatch(isFetching(false));
      });
    } catch (err) {
      dispatch(fetchStarshipError);
      dispatch(isFetching(false));
    }
  };
};

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const updateScore = idOfTheWinner => ({
  type: UPDATE_SCORE,
  payload: idOfTheWinner,
});

export const setStarshipToActive = starship => ({
  type: SET_STARSHIP_TO_ACTIVE,
  payload: starship,
});

export const clearStarshipErrors = () => ({
  type: CLEAR_STARSHIP_ERRORS,
});

export const clearActiveStarships = () => ({
  type: CLEAR_ACTIVE_STARSHIPS,
});

export const fetchStarshipSuccess = (id, data) => ({
  type: FETCH_STARSHIP_SUCCESS,
  payload: { id, data },
});

export const fetchStarshipError = () => ({
  type: FETCH_STARSHIP_ERROR,
});

export const isFetching = fetching => ({
  type: SET_FETCHING,
  payload: fetching,
});
