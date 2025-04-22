import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarSelector } from '@/store/common/commonSelector.ts';
import SnackbarContent from '@mui/material/SnackbarContent';
import CloseIcon from '@mui/icons-material/Close';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '0.75rem !important',
    maxWidth: 'calc(100% -40rem)',
  },
}));
const CustomSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const snackbar = useSelector(snackbarSelector);
  const { message, openSnackbar } = snackbar || {};

  const handleClose = () => dispatch(setSnackbar({ openSnackbar: false, message: '' }));

  const action = (
    <>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5 * 1000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        '&.MuiSnackbar-root': {
          bottom: '100px',
          direction: 'ltr',
          maxWidth: 'calc(100% - 2rem)',
          margin: '0 auto',
        },
      }}
    >
      <SnackbarContent classes={{ root: classes.root }} message={message} action={action} />
    </Snackbar>
  );
};

export default CustomSnackbar;
