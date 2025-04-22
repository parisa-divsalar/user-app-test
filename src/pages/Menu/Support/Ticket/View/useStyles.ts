import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',
    display: 'flex',
    flexGrow: '1',
    overflow: 'auto',
    padding: '1.5rem 1.5rem 5rem',

    '@media(max-width: 479px)': {
      padding: '1rem 1rem 4.5rem',
    },
  },
  subTicket: {
    padding: '1rem',
    border: `1px solid ${theme.palette.mode === 'dark' ? '#f5f9fc' : '#1B008614'}`,
    borderRadius: '0.5rem',
  },

  desContainer: {
    marginTop: '1rem',
    padding: '1rem',
    border: `1px solid ${theme.palette.mode === 'dark' ? '#f5f9fc' : '#1B008614'}`,
    borderRadius: '1rem',
  },

  fileContainer: {
    display: 'flex',
    marginTop: '1rem',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },

  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.info.light,
    borderRadius: '1rem',
    padding: '0.3rem 0.75rem',
    cursor: 'pointer',
  },

  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '0.5rem',
    padding: '1rem 0',
  },

  title: {
    fontSize: '0.75rem !important',
    textWrap: 'nowrap',
  },
  dividerDashed: {
    width: '100%',
    borderTop: `dashed 1px ${theme.palette.mode === 'dark' ? '#f5f9fc' : '#1B008614'}`,
  },
  buttonContainer: {
    width: '100%',
    padding: '1.5rem',
    position: 'fixed',
    bottom: '1rem',
    maxWidth: '31rem',
    zIndex: '99',

    '@media(max-width: 479px)': {
      padding: '1rem',
    },

    '@media(max-width: 32rem)': {
      borderRadius: '0',
      bottom: '0',
    },
  },
}));

export default useStyles;
