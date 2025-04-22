import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainStep: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '0 1rem',
    gap: '0.5rem',
  },

  step: {
    height: '4px',
    borderRadius: '4px',
    flex: '0 0 18%',
  },
}));

export default useStyles;
