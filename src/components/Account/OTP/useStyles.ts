import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    touchAction: 'manipulation',
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
}));

export default useStyles;
