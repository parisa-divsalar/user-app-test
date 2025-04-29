import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.125rem 1rem',
  },

  paper: {
    direction: 'rtl',
    borderRadius: '1.25rem !important',
    backgroundColor: theme.palette.background.default,
  },

  content: {
    flexGrow: '1',
    padding: '1rem',
    alignItems: 'center',
    textAlign: 'center',
  },

  row: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0 1rem',
  },
}));

export default useStyles;
