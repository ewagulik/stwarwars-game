import { availableStarshipIds } from '../constants';

export const getTheWinner = (elements, attribute) => {
  return elements.reduce(
    (acc, curr) => {
      if (isNaN(Number(curr[attribute]))) {
        return { id: 'Cannot compare' };
      } else {
        if (Number(curr[attribute]) > Number(acc.amount)) {
          return { id: curr.id, amount: curr[attribute] };
        }
        if (Number(curr[attribute]) === Number(acc.amount)) {
          return { id: "It's a tie!" };
        }
        return acc;
      }
    },
    { id: 0, amount: -1 }
  ).id;
};

export const getRandomId = () => {
  const starshipsAmount = availableStarshipIds.length;
  //Getting random number from 0 to number of starships - 1
  const randomNo = Math.floor(Math.random() * starshipsAmount);
  return availableStarshipIds[randomNo];
};
