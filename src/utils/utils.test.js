import { getRandomId, getTheWinner } from './index.js';
import { availableStarshipIds } from '../constants';
import { starships } from '../mocked_data.js';

describe('Get the winner', () => {
  it("Returns 'cannot compare' if at least one attribute is not a number", () => {
    expect(getTheWinner(starships, 'passengers')).toEqual('Cannot compare');
  });

  it("Returns 'It's a tie!' if both of the values are the equal", () => {
    expect(getTheWinner(starships, 'max_atmosphering_speed')).toEqual(
      "It's a tie!"
    );
  });

  it("Correctly assess the the winner and returns it's id", () => {
    expect(getTheWinner(starships, 'crew')).toEqual('22');
  });
});

describe('Get random id', () => {
  it('Outputs random id from the available starships array', () => {
    expect(availableStarshipIds).toContain(getRandomId());
  });
});
