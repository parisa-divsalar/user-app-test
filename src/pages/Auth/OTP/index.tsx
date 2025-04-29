import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import OtpInput from 'react-otp-input';
import useStyles from '@/components/Account/OTP/useStyles.ts';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import ResendCode from '@/pages/Auth/Common/ResendCode';
import { setToken } from '@/store/user/userSlice.ts';
import { PrivateRoutes } from '@/config/routes.ts';
import { login } from '@/apis/auth.ts';

const OTP = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useSelector(themeSelector);
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const msisdn = state?.msisdn;
  const requestId = state?.requestId;

  const onSubmit = () => {
    setLoading(true);
    const body = {
      otp: code,
      request_id: requestId,
    };

    login(body)
      .then((res: any) => {
        dispatch(setToken({ token: res.jwt, userId: res.user_id }));
        navigate(PrivateRoutes.dashboard);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (code: string) => setCode(code);
  const disabled = code.length < 6;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          {`کد تایید ارسال شده به شماره ${msisdn.startsWith('0') ? msisdn : `0${msisdn}`} را وارد کنید`}
          <Typography
            component='span'
            color='secondary.main'
            fontWeight='bold'
            variant='subtitle2'
            sx={{ cursor: 'pointer' }}
            mr={0.5}
            onClick={() => navigate(-1)}
          >
            (ویرایش)
          </Typography>
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
              fontSize: '16px',
              border: `1px solid ${theme === 'dark' ? '#616f86' : '#dddfe3'}`,
              borderRadius: '8px',
              flex: '0 0 15%',
              height: '54px',
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
        <CustomButton
          fullWidth
          color='secondary'
          disabled={disabled}
          onClick={onSubmit}
          loading={loading}
        >
          تایید و ادامه
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default OTP;
