import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import success from '@/assets/images/icon/success.svg';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';

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
    alignItems: 'center',
    flexDirection: 'column',
    direction: 'rtl',
    padding: '0 1.5rem',
  },
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '1.5rem 0 0.5rem',
    marginBottom: '0.5rem',
  },
}));

interface ConfirmSejamDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
}

const ConfirmSejamDrawer: FunctionComponent<ConfirmSejamDrawerProps> = (props) => {
  const { openDrawer, closeDrawer } = props;
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
        <Stack direction='row' className={classes.header}>
          <img src={success} alt='' width='40px' />
        </Stack>

        <Typography color='text.secondary' variant='subtitle2' mt={0.5} textAlign='center' px={4}>
          کاربر گرامی، اطلاعات شما با موفقیت از سجام دریافت و فرآیند احراز سجام شما تکمیل شد.
        </Typography>

        <Stack width='90%' my={2}>
          <CustomButton color='success' onClick={closeDrawer}>
            متوجه شدم
          </CustomButton>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default ConfirmSejamDrawer;
