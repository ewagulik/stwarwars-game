import { makeStyles } from '@material-ui/styles';
import emphasize from '../assets/emphasize.svg';

export const useStarshipStyles = makeStyles({
  card: {
    maxWidth: '350px',
    margin: '20px',
  },
  list: {
    margin: '0',
    paddingLeft: '0',
    listStyleType: 'none',
  },
  listElement: {
    padding: '5px 35px 5px 35px',
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFA441',
    fontSize: '22px',
    fontWeight: '600',
    paddingTop: '20px',
    marginBottom: '10px',
  },
  emphasize: {
    backgroundImage: `url(${emphasize})`,
    backgroundSize: 'cover',
    backgroundPosition: '-10px center',
    padding: '5px 35px 5px 35px',
  },
  cardContent: {
    padding: '0 0 0 16px',
  },
  winner: {
    boxShadow: '0px 0px 9px 4px rgba(255,164,65,1)',
  },
});

export const useAppStyles = makeStyles({
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },

  score: {
    textAlign: 'center',
    fontSize: '42px',
    color: '#3f51b5',
    marginTop: '0',
    marginBottom: '15px',
  },

  App: {
    padding: '50px 20px',
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },
  categoryName: {
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '400',
    marginBottom: '0',
  },
  error: {
    textAlign: 'center',
    color: '#a30404',
    fontSize: '24px',
  },
});

export const useCategoriesStyles = makeStyles({
  select: {
    fontSize: '16px',
    minWidth: '200px',
    height: '38px',
    background: '#fff',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '18px',
  },
  winner: {
    boxShadow: '0px 0px 9px 4px rgba(255,164,65,1)',
  },
  categoryText: {
    color: 'rgb(87, 86, 86)',
    fontSize: '15px',
    margin: '0 0 12px 0',
  },
});
