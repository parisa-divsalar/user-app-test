import { FormControlLabel, Stack, Typography } from '@mui/material';
import useStyles from '@/pages/Account/Wizard/useStyles.ts';
import CustomButton from '@/components/UI/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { setTheme } from '@/store/common/commonSlice.ts';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/config/routes.ts';
import { activeStepSelector } from '@/store/account/accountSelecor.ts';
import IOSSwitch from '@/components/UI/IOSSwitch';
import { useState } from 'react';
import AccountStepper from '@/pages/Account/Wizard/Stepper';

const AccountWizard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const activeStep = useSelector(activeStepSelector);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(true);

  const onSubmit = () => {
    switch (activeStep) {
      case 0:
        navigate(PublicRoutes.accountRegister);
        break;
      case 1:
        navigate(PublicRoutes.accountDocuments);
        break;
      case 2:
        navigate(PublicRoutes.accountAuthentication);
        break;
      case 3:
        navigate(PublicRoutes.accountResult, { state: { error: false } });
        break;
      default:
        return;
    }
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography color='text.secondary' fontWeight='normal' mb={1}>
          مراحل زیر را ادامه دهید تا حساب شما ایجاد شود
        </Typography>

        <AccountStepper activeStep={activeStep} />
      </Stack>

      <Stack gap={3} className={classes.buttonContainer}>
        <Stack direction='row' width='100' justifyContent='space-between' px={1}>
          <Typography color='text.primary' fontWeight='bold'>
            {theme === 'dark' ? 'تم دارک' : 'تم روشن'}
          </Typography>

          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={theme === 'dark'}
                onChange={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
              />
            }
            label=''
          />
        </Stack>

        {activeStep === 0 && (
          <Stack direction='row' width='100' justifyContent='space-between' px={1}>
            <Typography display='flex' color='text.secondary' fontWeight='normal' gap={0.5}>
              <Typography color='text.primary' fontWeight='bold'>
                شرایط و قوانین استفاده
              </Typography>
              را می‌پذیرم.
            </Typography>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                />
              }
              label=''
            />
          </Stack>
        )}

        <CustomButton
          fullWidth
          variant='contained'
          color='secondary'
          onClick={onSubmit}
          disabled={!acceptTerms}
        >
          {activeStep === 0 ? 'شروع افتتاح حساب' : 'ادامه مراحل افتتاح حساب'}
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default AccountWizard;
