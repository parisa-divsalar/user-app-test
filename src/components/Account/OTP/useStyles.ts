import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
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

  otpInput: {
    border: `1px solid ${theme.palette.mode === 'dark' ? '#616f86' : '#dddfe3'}`,
    borderRadius: '8px',
    flex: '0 0 15%',
    height: '54px',
    fontSize: '16px !important',
    color: theme.palette.mode === 'dark' ? '#c9d0d9' : '#3c6886',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    caretColor: theme.palette.mode === 'dark' ? 'white' : '#616f86',
  },
}));

export default useStyles;
