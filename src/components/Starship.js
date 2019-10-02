import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import starsBackground from '../assets/starsBackground.jpg';
import { useStarshipStyles } from './styles.js';
import { starshipData } from '../constants';

const Starship = ({ starship, category, winner }) => {
  const classes = useStarshipStyles();
  return (
    <div className={`test-starship ${classes.card}`}>
      <Card className={winner ? classes.winner : ''}>
        <CardMedia
          component='img'
          alt='starry sky'
          height='70'
          image={starsBackground}
          title='Starry sky'
        />
        <Typography className={classes.title}>{starship.name}</Typography>
        <CardContent className={classes.cardContent}>
          <ul className={classes.list}>
            {starshipData.map((attribute, i) => (
              <li
                key={i}
                className={
                  category === attribute.id
                    ? classes.emphasize
                    : classes.listElement
                }
              >
                {attribute.label}: {starship[attribute.id]}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Starship;
