import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.grey.A100,
  },

  circleBox: {
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    backgroundColor: '#2283AD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
