import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: '1',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '1.5rem',
  },

  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    flexGrow: '1',

    '@media(max-width: 479px)': {
      padding: '1rem',
    },
  },

  lottieContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '170px',
    maxWidth: '150px',
  },

  iconBox: {
    position: 'absolute',
    width: '66px',
    height: '66px',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
