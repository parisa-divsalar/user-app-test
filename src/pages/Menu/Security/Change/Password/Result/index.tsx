import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import successIcon from '@/assets/images/icon/success.svg';
import errorIcon from '@/assets/images/icon/error.svg';

const useStyles = makeStyles(() => ({
  paper: {
    width: '100% !important',
    maxWidth: '32rem !important',
    margin: '0 auto !important',
    borderTopLeftRadius: '1.5rem !important',
    borderTopRightRadius: '1.5rem !important',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    padding: '1rem 1.5rem',
  },
}));

interface ChangePasswordDrawerProps {
  openDrawer: boolean;
  error: boolean;
  closeDrawer: () => void;
}

const ChangePasswordDrawer: FunctionComponent<ChangePasswordDrawerProps> = (props) => {
  const { openDrawer, closeDrawer, error } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor='bottom'
      open={openDrawer}
      onClose={closeDrawer}
      classes={{
        paper: classes.paper,
      }}
    >
      <Stack className={classes.content}>
        <Stack>
          <img src={error ? errorIcon : successIcon} alt='' width='40px' />
        </Stack>

        <Typography color='text.secondary' variant='subtitle2' mt={1} textAlign='center' px={4}>
          {error
            ? 'کاربر گرامی، رمز عبور شما تغییر نیافت. مجددا تلاش کنید.'
            : 'کاربر گرامی، رمز عبور شما با موفقیت تغییر یافت.'}
        </Typography>

        <Stack width='90%' my={2}>
          <CustomButton fullWidth color={error ? 'error' : 'success'} onClick={closeDrawer}>
            {error ? 'تلاش مجدد' : 'متوجه شدم'}
          </CustomButton>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default ChangePasswordDrawer;
