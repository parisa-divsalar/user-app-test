import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import error from '@/assets/images/icon/error.svg';
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

interface SejamResultDrawerProps {
  openDrawer: boolean;
  errorCodeSejam: number;
  closeDrawer: () => void;
  onSubmit: () => void;
}

const SejamResultDrawer: FunctionComponent<SejamResultDrawerProps> = (props) => {
  const { openDrawer, closeDrawer, errorCodeSejam, onSubmit } = props;
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
          <img src={error} alt='' width='40px' />
        </Stack>

        <Typography color='text.secondary' variant='subtitle2' mt={0.5}>
          {errorCodeSejam === 1
            ? '  کاربر گرامی، اطلاعات شما در سجام یافت نشد. لطفا در سامانه سجام ثبت نام کنید.'
            : 'کاربر گرامی، اطلاعات وارد شده با اطلاعات سجام تطابق ندارد لطفا اطلاعات خود را تصحیح کنید.'}
        </Typography>

        <Stack width='100%' my={2}>
          <CustomButton color='secondary' onClick={onSubmit}>
            {errorCodeSejam === 1 ? '  ثبت نام سجام' : 'اصلاح اطلاعات'}
          </CustomButton>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default SejamResultDrawer;
