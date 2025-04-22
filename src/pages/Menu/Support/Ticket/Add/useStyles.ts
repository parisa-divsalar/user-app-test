import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',
    display: 'flex',
    flexGrow: '1',
    overflow: 'auto',
    padding: '1rem 1.5rem 5rem',

    '@media(max-width: 479px)': {
      padding: '1rem 1rem 4.5rem',
    },
  },

  cardActionArea: {
    margin: '0.5rem auto !important',
    borderRadius: '0.75rem',

    '&:hover': {
      borderRadius: '0.75rem',
    },
  },

  addFileContainer: {
    display: 'flex',
    width: 'fit-content',
    borderRadius: '0.875rem',
    padding: '0.5rem',
    alignItems: 'center',
    cursor: 'pointer',
    gap: '0.2rem',
    marginTop: '0.75rem',
    transition: 'all 0.5s ease',

    '&:hover': {
      backgroundColor: '#1B008614',
    },
  },

  selectContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #d1d1d1',
    padding: '0.7rem',
    borderRadius: '0.75rem',
    gap: '0.4rem',
  },

  fileContainer: {
    display: 'flex',
    marginTop: '1rem',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },

  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #d1d1d1',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.4rem',
    padding: '0.3rem 0.75rem',
    cursor: 'pointer',
  },

  buttonContainer: {
    width: '100%',
    padding: '1.5rem',
    position: 'fixed',
    bottom: '1rem',
    maxWidth: '31rem',
    zIndex: '99',

    '@media(max-width: 479px)': {
      padding: '1rem',
    },

    '@media(max-width: 32rem)': {
      borderRadius: '0',
      bottom: '0',
    },
  },
}));

export default useStyles;
