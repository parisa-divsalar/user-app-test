import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '100%',
    marginTop: '1rem',
  },

  stepLabelRoot: {
    gap: '0.5rem !important',
    cursor: 'pointer !important',
  },

  stepIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
