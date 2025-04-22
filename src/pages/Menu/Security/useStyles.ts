import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '100%',
    padding: '0.5rem 1rem 1rem',
  },

  cardActionArea: {
    display: 'flex !important',
    alignItems: 'center !important',
    borderRadius: '0.5rem !important',
    margin: '0.5rem 0 !important',
    width: '100% !important',
  },

  menuItem: {
    width: '100%',
    display: 'flex',
    padding: '0.75rem 0.25rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
