import { useEffect, useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import logo from '@/assets/images/logo/logo.svg';
import packageJson from '../../../package.json';

import AddToHomeScreen from '@/pages/Auth/AddToHomeScreen';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/config/routes.ts';
import isInStandaloneMode from '@/utils/isInstalledWebApp';
import useStyles from '@/pages/Splash/useStyles.ts';

const SplashScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isInstalledApp = isInStandaloneMode();

  const [openAddToHomeScreen, setOpenAddToHomeScreen] = useState<boolean>(isInstalledApp || false);

  useEffect(() => {
    setTimeout(() => {
      setOpenAddToHomeScreen(true);
    }, 3_500);
  }, []);

  return (
    <Stack className={classes.mainSplash}>
      <Stack className={classes.content}>
        <Stack alignItems='center' gap={2}>
          <img src={logo} alt='' />
          <CircularProgress size={20} color='inherit' />
        </Stack>
      </Stack>

      <Typography color='white'>{`V ${packageJson.version}`}</Typography>

      <AddToHomeScreen
        openAddToHomeScreen={openAddToHomeScreen}
        closeDialog={() => {
          setOpenAddToHomeScreen(false);
          navigate(PublicRoutes.onboarding);
        }}
      />
    </Stack>
  );
};

export default SplashScreen;
