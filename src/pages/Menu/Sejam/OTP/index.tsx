import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import ResendCode from '@/pages/Auth/Common/ResendCode';
import useStyles from '@/pages/Menu/Sejam/OTP/useStyles.ts';
import SejamResultDrawer from '@/pages/Menu/Sejam/OTP/ResultDrawer';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';

const OTPSejam = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useSelector(themeSelector);
  const [code, setCode] = useState<string>('');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [errorCodeSejam, setErrorCodeSejam] = useState<number>(1);

  const onSubmit = () => {
    setOpenDrawer(true);
  };

  const handleChange = (code: string) => setCode(code);

  const disabled = code === '' || code.length < 6;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary' variant='subtitle1'>
          کد تایید ارسال شده به شماره ثبت نامی در سجام را وارد کنید.
        </Typography>

        <Typography mt={0.5} mb={2} color='text.secondary' variant='subtitle2'>
          کاربر گرامی شماره موبایل فوق در حساب کاربری سجام شما ثبت شده است و امکان تغییر ندارد در
          صورت نیاز نسبت به تغییر آن از سامانه سجام اقدام نمایید.
        </Typography>

        <Stack width='100%' mt={2} dir='ltr'>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            shouldAutoFocus
            inputType='tel'
            containerStyle={{
              width: '100%',
              gap: '0.5rem',
              justifyContent: 'end',
            }}
            inputStyle={{
              border: `1px solid ${theme === 'dark' ? '#616f86' : '#dddfe3'}`,
              borderRadius: '8px',
              flex: '0 0 15%',
              height: '54px',
              fontSize: '1rem',
              color: theme === 'dark' ? '#c9d0d9' : '#3c6886',
              backgroundColor: 'transparent',
              fontWeight: 'bold',
              caretColor: theme === 'dark' ? 'white' : '#616f86',
            }}
            renderInput={(props) => <input {...props} />}
          />

          <ResendCode sendOtp={() => {}} />
        </Stack>

        <Typography textAlign='center' mt={4} color='secondary.main' fontWeight='bold'>
          هنوز کد را دریافت نکرده‌ام
        </Typography>
      </Stack>

      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید و ادامه
        </CustomButton>
      </Stack>

      <SejamResultDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        errorCodeSejam={errorCodeSejam}
        onSubmit={() => {
          if (errorCodeSejam === 1) setErrorCodeSejam(2);
          if (errorCodeSejam === 2) navigate(PrivateRoutes.sejamInfo);
        }}
      />
    </Stack>
  );
};

export default OTPSejam;
