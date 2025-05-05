import { Dialog, Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import logo from '@/assets/images/logo/logo.svg';
import add from '@/assets/images/icon/add.svg';
import share from '@/assets/images/icon/share.svg';

import { FunctionComponent } from 'react';
import useStyles from '@/pages/Auth/AddToHomeScreen/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/config/routes.ts';

interface AddToHomeScreenProps {
  openAddToHomeScreen: boolean;
  closeDialog: () => void;
}
const AddToHomeScreen: FunctionComponent<AddToHomeScreenProps> = (props) => {
  const { openAddToHomeScreen, closeDialog } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Dialog
      onClose={closeDialog}
      open={openAddToHomeScreen}
      maxWidth='xs'
      classes={{ paper: classes.paper }}
    >
      <Stack className={classes.mainContainer}>
        <Stack className={classes.content} mt={4}>
          <img src={logo} alt='' width='64px' />

          <Stack className={classes.row} mt={2}>
            <Typography color='text.primary' variant='subtitle1' fontWeight='normal'>
              شیوه نصب نسخه{' '}
              <Typography component='span' fontWeight='bold'>
                وب‌اپلیکیشن
              </Typography>
            </Typography>
          </Stack>

          <Stack direction='row' className={classes.row} mt={6} gap={1}>
            <img src={share} alt='' />
            <Typography color='text.primary' style={{fontSize:'13px'}} fontWeight='normal'>
              در نوار پایین روی دکمه
              <Typography component='span' color='text.primary' style={{fontSize:'13px'}} px={0.2}>
                Share
              </Typography>
              بزنید.
            </Typography>
          </Stack>

          <Stack direction='row' className={classes.row} gap={1} mt={3}>
            <img src={add} alt='' />
            <Typography color='text.primary' justifyItems='right' style={{fontSize:'12px'}} fontWeight='normal'>
              دکمه
              <Typography component='span' justifyItems='right'  style={{fontSize:'13px'}}  color='text.primary' px={0.2}>
                Add to home screen
              </Typography>
              را انتخاب کنید.
            </Typography>
          </Stack>

          <Stack direction='row' className={classes.row} gap={1} mt={3}>
            <img src={add} alt='' />
            <Typography color='text.primary' style={{fontSize:'13px'}} fontWeight='normal'>
              در مرحله آخر روی
              <Typography component='span' style={{fontSize:'12px'}} px={0.5}>
                Add
              </Typography>{' '}
              بزنید.
            </Typography>
          </Stack>
        </Stack>

        <Stack width='90%' mx={2} p={1} mt={3} mb={4}>
          <CustomButton fullWidth onClick={() => navigate(PublicRoutes.onboarding)}>
            متوجه شدم
          </CustomButton>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddToHomeScreen;
