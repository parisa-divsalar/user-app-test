import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainSplash: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '1.4rem',
    height: '100%',
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    transition: 'all ease 0.5s',

    '@media(max-width: 32rem)': {
      borderRadius: '0',
      marginTop: '0',
    },
  },

  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '1',

    '& * img': {
      width: '10rem',
    },
  },
}));

export default useStyles;
