import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainInputContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'start',
    border: `1px solid ${theme.palette.divider}`,
    padding: '0.7rem',
    borderRadius: '0.75rem',
    gap: '0.4rem',
    margin: '0.5rem auto',
    cursor: 'pointer',
    position: 'relative',
  },

  labelContainer: {
    position: 'absolute',
    top: '-8px',
    right: '6px',
    padding: '0 0.3rem',

    '& > .MuiTypography-root': {
      fontSize: '10px',
      fontWeight: '300',
    },
  },
}));

export default useStyles;
