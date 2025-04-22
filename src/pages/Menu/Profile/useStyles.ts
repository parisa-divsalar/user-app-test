import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainSetting: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
  },

  content: {
    display: 'flex',
    width: '100%',
    flexGrow: '1',
    padding: '1rem',
    alignItems: 'center',
  },

  row: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    borderBottom: '1px solid #1B008614',
  },
}));

export default useStyles;
