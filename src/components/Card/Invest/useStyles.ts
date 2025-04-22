import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainCard: {
    width: '100%',
    padding: '1rem',
    border: '1px solid #1B008614',
    borderRadius: '1rem',
    backgroundColor: theme.palette.mode === 'dark' ? '#0f2243' : '#fff',
    boxShadow: '0px 0px 10px 0px #0D446B1A',
  },

  circleArrowContainer: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  },

  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    padding: '0.2rem 0.5rem',
  },

  cardActionArea: {
    borderRadius: '1rem !important',
    marginTop: '0.5rem !important',
  },
}));

export default useStyles;
