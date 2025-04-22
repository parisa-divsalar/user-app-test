import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainAppbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  appbar: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '1rem 1rem 0.5rem',
  },

  backImage: {
    rotate: '180deg',
  },
}));

export default useStyles;
