import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '100%',
    height: '100%',

    '& >:first-child': {
      width: '100%',
      backgroundColor: '#0D446B',
      flex: '40%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    '& >:last-child': {
      width: '100%',
      padding: '2rem 1rem 1rem',
      flex: '60%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '@media(max-width: 340px)': {
        padding: '1rem',
      },
    },
  },

  logoContainer: {
    position: 'absolute',
    bottom: '-2.5rem',
    width: '80px',

    '@media(max-width: 340px)': {
      width: '60px',
      bottom: '-1.875rem',
    },
  },
}));

export default useStyles;
