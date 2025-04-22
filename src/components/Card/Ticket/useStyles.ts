import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardActionArea: {
    marginBottom: '1rem !important',
    padding: '0.5rem 0.25rem !important',
    borderBottom: '1px solid #1B008614 !important',
  },

  statusBox: {
    width: 'fit-content',
    borderRadius: '0.3rem',
    gap: '0.5rem',
    padding: '0.2rem 0.75rem',
  },
}));

export default useStyles;
