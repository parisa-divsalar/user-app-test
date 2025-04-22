import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
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

  infoBox: {
    display: 'flex',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${theme.palette.text.secondary}`,
    marginBottom: '2rem',
    gap: '0.5rem',
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
