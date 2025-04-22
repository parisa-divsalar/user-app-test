import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainCard: {
    width: '100%',
    padding: '1rem',
    border: '1px solid #1B008614',
    borderRadius: '1rem',
    marginTop: '1rem',
    backgroundColor: theme.palette.mode === 'dark' ? '#0f2243' : '#fff',
  },

  exitActionArea: {
    cursor: 'pointer',
    marginTop: '1rem',
  },
}));

export default useStyles;
