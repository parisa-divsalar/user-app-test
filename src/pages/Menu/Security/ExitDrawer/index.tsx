import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import { logout } from '@/apis/logout.ts';
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
    flexDirection: 'column',
    direction: 'rtl',
    padding: '1rem 1.5rem',
  },

  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 0 0.5rem',
    marginBottom: '0.5rem',
  },
}));

interface CustomerOptionDrawerProps {
  openExitDrawer: boolean;
  closeDrawer: () => void;
}
const ExitDrawer: FunctionComponent<CustomerOptionDrawerProps> = (props) => {
  const { openExitDrawer, closeDrawer } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor='bottom'
      open={openExitDrawer}
      onClose={closeDrawer}
      classes={{
        paper: classes.paper,
      }}
    >
      <Stack className={classes.content}>
        <Typography color='text.primary' variant='subtitle2' my={2} textAlign='center'>
          آیا مطمئن هستید که از حساب کاربری خارج می‌شوید؟
        </Typography>

        <Stack width='100%' my={2} gap={2} direction='row'>
          <CustomButton fullWidth color='error' onClick={() => logout()}>
            بله، مطمئنم
          </CustomButton>

          <CustomButton fullWidth variant='outlined' color='secondary' onClick={closeDrawer}>
            خیر
          </CustomButton>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default ExitDrawer;
