import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    padding: '1rem',
  },

  content: {
    width: '100%',
    padding: '1rem 0',
    alignItems: 'center',
  },

  headerCardActionArea: {
    display: 'flex !important',
    alignItems: 'center !important',
    borderRadius: '0.875rem !important',
    width: '95% !important',
  },

  cardActionArea: {
    display: 'flex !important',
    alignItems: 'center !important',
    borderRadius: '0.5rem !important',
    margin: '0.25rem 0 !important',
  },

  header: {
    padding: '0.5rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1B008614',
  },

  menuItem: {
    width: '100%',
    display: 'flex',
    padding: '1rem 0.25rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    width: '100px',
    height: '100px',
    backgroundColor: theme.palette.primary.main,
    marginTop: '2rem',
  },
}));

export default useStyles;
