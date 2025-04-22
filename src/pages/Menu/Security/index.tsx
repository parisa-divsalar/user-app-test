import { CardActionArea, FormControlLabel, Stack, Typography } from '@mui/material';
import SecurityRow from '@/pages/Menu/Security/Row';
import UserNameSvg from '@/components/UI/Icons/UserName';
import PasswordSvg from '@/components/UI/Icons/Password';
import MobileSvg from '@/components/UI/Icons/Mobile';
import exit from '@/assets/images/icon/exit.svg';
import IOSSwitch from '@/components/UI/IOSSwitch';
import { useState } from 'react';
import FingerPrintSvg from '@/components/UI/Icons/FingerPrint';
import FacialRecognitionSvg from '@/components/UI/Icons/FacialRecognition';
import ArrowSvg from '@/components/UI/Icons/Arrow';
import ExitDrawer from '@/pages/Menu/Security/ExitDrawer';
import useStyles from '@/pages/Menu/Security/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';

const Security = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loginWithFingerprint, setLoginWithFingerprint] = useState<boolean>(true);
  const [loginWithFacialRecognition, setLoginWithFacialRecognition] = useState<boolean>(true);
  const [openExitDrawer, setOpenExitDrawer] = useState<boolean>(false);

  return (
    <Stack className={classes.mainContainer}>
      <SecurityRow
        title='تغییر نام کاربری'
        icon={<UserNameSvg />}
        onClick={() => navigate(PrivateRoutes.changeUserName)}
      />

      <SecurityRow
        title='تغییر رمز عبور'
        icon={<PasswordSvg />}
        onClick={() => navigate(PrivateRoutes.changePassword)}
      />

      <SecurityRow
        title='تغییر شماره تلفن همراه'
        icon={<MobileSvg />}
        onClick={() => navigate(PrivateRoutes.changeMobile)}
      />

      <Stack direction='row' className={classes.menuItem}>
        <Stack direction='row'>
          <FacialRecognitionSvg />
          <Typography color='text.primary' mr={1} variant='subtitle2'>
            ورود با تشخیص چهره
          </Typography>
        </Stack>

        <FormControlLabel
          control={
            <IOSSwitch
              sx={{ m: 1 }}
              checked={loginWithFacialRecognition}
              onChange={() => setLoginWithFacialRecognition(!loginWithFacialRecognition)}
            />
          }
          label=''
        />
      </Stack>

      <Stack direction='row' className={classes.menuItem}>
        <Stack direction='row'>
          <FingerPrintSvg />
          <Typography color='text.primary' mr={1} variant='subtitle2'>
            ورود با اثر انگشت
          </Typography>
        </Stack>

        <FormControlLabel
          control={
            <IOSSwitch
              sx={{ m: 1 }}
              checked={loginWithFingerprint}
              onChange={() => setLoginWithFingerprint(!loginWithFingerprint)}
            />
          }
          label=''
        />
      </Stack>

      <SecurityRow
        title='دستگاه‌های فعال'
        icon={<MobileSvg />}
        onClick={() => navigate(PrivateRoutes.devices)}
      />

      <CardActionArea className={classes.cardActionArea} onClick={() => setOpenExitDrawer(true)}>
        <Stack direction='row' className={classes.menuItem}>
          <Stack direction='row'>
            <img src={exit} alt='' />
            <Typography color='error.main' mr={1} variant='subtitle2'>
              حذف تنظیمات و خروج
            </Typography>
          </Stack>
          <ArrowSvg color='#EF4444' />
        </Stack>
      </CardActionArea>

      <ExitDrawer openExitDrawer={openExitDrawer} closeDrawer={() => setOpenExitDrawer(false)} />
    </Stack>
  );
};
export default Security;
