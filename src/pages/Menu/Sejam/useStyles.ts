import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',

    '@media(max-width: 340px)': {
      padding: '0.5rem',
    },
  },

  userInfoBox: {
    margin: '1rem 0',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.mode === 'dark' ? '#0f2243' : '#e1e0cf',
  },

  content: {
    width: '100%',
    flexGrow: '1',
  },
}));

export default useStyles;
