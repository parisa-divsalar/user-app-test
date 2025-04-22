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
    padding: '0 1rem',
  },

  orderBox: {
    marginTop: '0.5rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.mode === 'dark' ? '#12284C' : 'white',
    padding: '1rem',
    boxShadow:
      theme.palette.mode === 'dark' ? '0px 0px 4px 0px #4ca7d8' : '0px 2px 4px -1px #0000000F',
  },

  navBox: {
    marginTop: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.light,
    padding: '0.875rem',
  },
}));

export default useStyles;
