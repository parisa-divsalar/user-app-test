import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  investContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '54px',
    height: '54px',
    borderRadius: '100%',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.light,
  },

  message: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '300 !important',
    width: '75%',
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
