import {
  starshipsReducer,
  activeStarshipsReducer,
  scoreReducer,
} from './reducers';
import { starship, starship1 } from '../mocked_data';

describe('Store all fetched starships in redux', () => {
  it('adds first starship into starships object with id as a key', () => {
    let action = {
      type: 'FETCH_STARSHIP_SUCCESS',
      payload: { id: 5, data: starship },
    };
    expect(starshipsReducer({}, action)).toEqual({
      5: {
        name: 'Star Destroyer',
        length: '1,600',
        max_atmosphering_speed: '920',
        crew: '47060',
        passengers: '0',
        id: 5,
      },
    });
  });

  it('adds second starship to starship object with correct format', () => {
    let action = {
      type: 'FETCH_STARSHIP_SUCCESS',
      payload: { id: 7, data: starship1 },
    };
    let initialState = {
      5: {
        name: 'Star Destroyer',
        length: '1,600',
        max_atmosphering_speed: '920',
        crew: '47060',
        passengers: '0',
        id: 5,
      },
    };
    expect(starshipsReducer(initialState, action)).toEqual({
      5: {
        name: 'Star Destroyer',
        length: '1,600',
        max_atmosphering_speed: '920',
        crew: '47060',
        passengers: '0',
        id: 5,
      },
      7: {
        name: 'Naboo Royal Starship',
        length: '76',
        max_atmosphering_speed: '920',
        crew: '8',
        passengers: 'unknown',
        id: 7,
      },
    });
  });
});

describe('activeStarshipsReducer', () => {
  it('adds first id to activeStarship reducer', () => {
    let action = {
      type: 'FETCH_STARSHIP_SUCCESS',
      payload: { id: 5, data: starship },
    };
    expect(activeStarshipsReducer([], action)).toEqual([5]);
  });
  it('adds array of ids to activeStarship reducer', () => {
    let action = {
      type: 'SET_STARSHIP_TO_ACTIVE',
      payload: [2, 8],
    };
    expect(activeStarshipsReducer([5], action)).toEqual([5, 2, 8]);
  });
});

describe('scoreReducer', () => {
  it('sets the score from the first game', () => {
    expect(scoreReducer([0, 0], { type: 'UPDATE_SCORE', payload: 1 })).toEqual([
      0,
      1,
    ]);
  });
  it('sets the score from another round', () => {
    expect(scoreReducer([5, 4], { type: 'UPDATE_SCORE', payload: 0 })).toEqual([
      6,
      4,
    ]);
  });
});
