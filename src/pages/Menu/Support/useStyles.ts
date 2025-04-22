import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '100%',
    padding: '1rem',
    alignItems: 'center',
  },

  cardActionArea: {
    display: 'flex !important',
    alignItems: 'center !important',
    borderRadius: '0.5rem !important',
    margin: '0.25rem 0 !important',
  },

  menuItem: {
    width: '100%',
    display: 'flex',
    padding: '1rem 0.25rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
