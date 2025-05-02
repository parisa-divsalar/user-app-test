import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainOnBoarding: {
    width: '100%',
    height: '100%',
    paddingBottom: '1rem',
    justifyContent: 'space-between',
    borderRadius: '1.4rem',
    overflowX: 'hidden',

    '& *': {
      transition: 'all ease 0.5s',
    },
    '@media(max-width: 32rem)': {
      borderRadius: '0',
      marginTop: '0',
    },
  },

  introImage: {
    width: '100%',
    height: '100%',
    maxHeight: '45vh',
    objectFit: 'cover',

    '@media(max-width: 579px)': {
      maxHeight: '45vh',
    },
  },

  content: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },

  buttonContainer: {
    width: '100%',
    padding: '1rem',
    position: 'fixed',
    bottom: '1rem',
    maxWidth: '32rem',
    left: 'calc(50% - 16rem)',
    zIndex: '99',
    // backgroundColor: 'red',
    // opacity: '0.5',

    '@media(max-width: 32rem)': {
      maxWidth: '100%',
      left: '0',
      bottom: '0',
    },
  },
}));

export default useStyles;
