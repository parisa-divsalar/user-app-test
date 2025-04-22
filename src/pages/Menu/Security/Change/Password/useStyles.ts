import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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
  },

  passwordRule: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '0.2rem',
  },
}));

export default useStyles;
