import { combineReducers } from 'redux';
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

const starshipErrorReducer = (error = '', action) => {
  if (action.type === FETCH_STARSHIP_ERROR) {
    return 'Error! Starship unable to land safely. Try to summond them again in a second';
  }
  if (action.type === CLEAR_STARSHIP_ERRORS) {
    return '';
  }
  return error;
};

export const starshipsReducer = (starships = {}, action) => {
  if (action.type === FETCH_STARSHIP_SUCCESS) {
    const { id, data } = action.payload;
    return { ...starships, [id]: { ...data, id: id } };
  }
  return starships;
};

export const activeStarshipsReducer = (activeStarships = [], action) => {
  if (action.type === FETCH_STARSHIP_SUCCESS) {
    return [...activeStarships, action.payload.id];
  }
  if (action.type === CLEAR_ACTIVE_STARSHIPS) {
    return [];
  }
  if (action.type === SET_STARSHIP_TO_ACTIVE) {
    return [...activeStarships, ...action.payload];
  }
  return activeStarships;
};

const fetchingReducer = (isFetching = false, action) => {
  if (action.type === SET_FETCHING) {
    return action.payload;
  }
  return isFetching;
};

const categoryReducer = (category = 'passengers', action) => {
  if (action.type === SET_CATEGORY) {
    return action.payload;
  }
  return category;
};

export const scoreReducer = (score = [0, 0], action) => {
  if (action.type === UPDATE_SCORE) {
    let newScore = [...score];
    newScore[action.payload] = score[action.payload] + 1;
    return newScore;
  }
  return score;
};

export default combineReducers({
  fetchingStarhipError: starshipErrorReducer,
  starships: starshipsReducer,
  activeStarships: activeStarshipsReducer,
  isFetching: fetchingReducer,
  score: scoreReducer,
  category: categoryReducer,
});
