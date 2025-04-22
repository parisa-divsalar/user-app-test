import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  mainCard: {
    width: '100%',
    alignItems: 'center',

    '& .MuiTypography-root': {
      '@media(max-width: 420px)': {
        fontSize: '0.75rem !important',
      },

      '@media(max-width: 340px)': {
        fontSize: '0.6rem !important',
      },
    },
  },

  cardActionArea: {
    width: '100% !important',
    height: '100% !important',
    padding: '1rem !important',
    minHeight: '70px !important',
    borderRadius: '1rem !important',
    backgroundColor: theme.palette.mode === 'dark' ? '#21354b !important' : '#f0f1e4 !important',
    border:
      theme.palette.mode === 'dark'
        ? '1px solid #5d6c4b !important'
        : '1px solid #dadea8 !important',
    display: 'flex !important',

    '@media(max-width: 395px)': {
      minHeight: '60px !important',
    },
  },
}));

export default useStyles;
