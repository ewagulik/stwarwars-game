import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Starship from './Starship';
import CategoriesDropdown from './CategoriesDropdown';
import {
  fetchStarshipsData,
  clearStarshipErrors,
  clearActiveStarships,
  setStarshipToActive,
  updateScore,
} from '../store/actions';
import { players, starshipData } from '../constants';
import { getTheWinner, getRandomId } from '../utils/index';
import { useAppStyles } from './styles';

const App = () => {
  const dispatch = useDispatch();
  const fetchingStarhipError = useSelector(state => state.fetchingStarhipError);
  const isFetching = useSelector(state => state.isFetching);
  const starships = useSelector(state => state.starships);
  const activeStarships = useSelector(state => state.activeStarships);
  const category = useSelector(state => state.category);
  const score = useSelector(state => state.score);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState('');
  const classes = useAppStyles();

  const activeStarshipsData = Object.values(
    activeStarships.map(id => starships[id])
  );

  useEffect(() => {
    if (!isFetching && activeStarships.length === 2) {
      const winner = getTheWinner(activeStarshipsData, category);
      setWinner(winner);
      if (typeof winner === 'number') {
        dispatch(updateScore(activeStarships.indexOf(winner)));
      }
    }
  }, [isFetching, activeStarships, category, dispatch]);

  const fetchStarships = () => {
    const randomIds = Array.from({ length: players }).map(() => {
      return getRandomId();
    });
    //If the starships are already in redux set them to active, otherwise fetch them from api
    const existsInRedux = randomIds.filter(id => starships[id]);
    const newStarships = randomIds.filter(id => !starships[id]);
    if (existsInRedux.length > 0) {
      dispatch(setStarshipToActive(existsInRedux));
    }
    if (newStarships.length > 0) {
      dispatch(fetchStarshipsData(newStarships));
    }
  };

  const startGame = () => {
    setGameStarted(true);
    fetchStarships();
  };

  const nextRound = () => {
    dispatch(clearActiveStarships());
    dispatch(clearStarshipErrors());
    setWinner('');
    fetchStarships();
  };
  return (
    <div className={classes.App}>
      <Button
        onClick={gameStarted ? nextRound : startGame}
        variant='contained'
        color='primary'
        disabled={isFetching}
        className={classes.button}
        data-test='start-game-button'
      >
        {isFetching ? 'Loading...' : gameStarted ? 'Next round' : 'Start game!'}
      </Button>
      <h3 className={classes.categoryName} data-test='category-heading'>
        Category: {starshipData.find(data => data.id === category).label}
      </h3>
      <CategoriesDropdown />
      {typeof winner === 'string' && <p className={classes.error}>{winner}</p>}
      <h2 className={classes.score}>
        {score[0]} : {score[1]}
      </h2>
      <div className={classes.flexCenter}>
        {activeStarshipsData.map(starship => (
          <Starship
            starship={starship}
            category={category}
            winner={starship.id === winner}
          />
        ))}
      </div>
      <p>{fetchingStarhipError}</p>
    </div>
  );
};

export default App;
