import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainDashboard: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    paddingBottom: '1rem',

    '@media(max-width: 340px)': {
      padding: '1rem 0.25rem',
    },

    '& > img': {
      width: '100%',
    },
  },

  bannerContainer: {
    width: '100%',
    maxWidth: '32rem',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    padding: '1.5rem 0 0.5rem',
  },

  content: {
    padding: '1rem',
  },
}));

export default useStyles;
