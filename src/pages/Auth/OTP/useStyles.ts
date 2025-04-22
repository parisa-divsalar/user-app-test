import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainOtp: {
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
    padding: '1.5rem',

    '@media(max-width: 479px)': {
      padding: '1rem',
    },
  },

  buttonContainer: {
    width: '100%',
    padding: '1.5rem',

    '@media(max-width: 479px)': {
      padding: '1rem',
    },
  },
}));

export default useStyles;
