import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainLayout: {
    width: '100%',
    height: window.innerHeight,
    margin: '0',
    overflow: 'hidden',
    backgroundColor: theme.palette.grey.A700,
    transition: 'all ease 0.5s',
  },

  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '32rem',
    margin: '0 auto',
    marginTop: '1rem',
    height: 'calc(100vh - 2rem)',
    borderRadius: '1.5rem',
    backgroundColor: 'white',
    overflow: 'hidden',

    '@media(max-width: 32rem)': {
      borderRadius: '0',
      marginTop: '0',
      height: ({ innerHeight }: { widthLayout: boolean; innerHeight: number }) => innerHeight,
    },
  },

  childrenContent: {
    width: '100%',
    flex: '1',
    overflow: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: ({ widthLayout }: { widthLayout: boolean; innerHeight: number }) =>
      widthLayout ? '0' : '0.5rem',
  },
}));

export default useStyles;
