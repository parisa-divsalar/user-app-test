import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    flex: '1',

    '& *': {
      transition: 'all ease 0.5s',
    },
  },

  content: {
    width: '100%',
    display: 'flex',
    flexGrow: '1',
    overflow: 'auto',
    padding: '0.5rem 1rem',
    textAlign: 'right',
  },

  buttonContainer: {
    width: '100%',
    padding: '1rem',
    position: 'fixed',
    bottom: '1.5rem',
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
