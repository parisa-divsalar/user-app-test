import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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
    padding: '1.5rem 1.5rem 5rem',

    '@media(max-width: 479px)': {
      padding: '1rem 1rem 4.5rem',
    },
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
