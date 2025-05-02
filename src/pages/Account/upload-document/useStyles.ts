import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  uploadDocumentPage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#626F86CC',
    padding: '0 16px',
  },

  uploadDocumentBtns: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '30px',
  },
  uploadSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13.75rem',
  },
}));

export default useStyles;
