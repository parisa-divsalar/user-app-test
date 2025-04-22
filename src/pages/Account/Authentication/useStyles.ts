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
  },

  content: {
    width: '100%',
    flexGrow: '1',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleBox: {
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
