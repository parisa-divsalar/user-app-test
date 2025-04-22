import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  lottieContainer: {
    width: '100%',
    maxWidth: '200px',
  },

  message: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '300 !important',
    width: '60%',
    lineHeight: '2rem !important',

    '@media(max-width: 550px)': {
      width: '55%',
    },

    '@media(max-width: 479px)': {
      width: '70%',
    },

    '@media(max-width: 400px)': {
      width: '95%',
    },
  },
}));

export default useStyles;
