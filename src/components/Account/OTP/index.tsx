import { Stack, Typography } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import OtpInput from 'react-otp-input';
import useStyles from '@/components/Account/OTP/useStyles.ts';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import ResendCode from '@/pages/Auth/Common/ResendCode';
import { login } from '@/apis/auth.ts';
import Loading from '@/components/Loading';

interface OTPForm {
  setStep: (step: number) => void;
  msisdn: string;
}

const OTPForm: FunctionComponent<OTPForm> = (props) => {
  const { setStep, msisdn } = props;
  const classes = useStyles();
  const theme = useSelector(themeSelector);
  const [code, setCode] = useState<string>('');
  const [otpLoading, setOtpLoading] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {
    setLoading(true);
    const body = {
      otp: code,
      request_id: requestId,
    };

    login(body)
      .then(() => {
        // dispatch(setToken({ token: res.jwt, userId: res.user_id }));
        setStep(4);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setOtpLoading(true);
    const body = {
      method: 'mobile',
      mobile: msisdn,
    };

    login(body)
      .then((res: any) => setRequestId(res?.request_id))
      .finally(() => setOtpLoading(false));
  }, []);

  const handleChange = (code: string) => setCode(code);

  const disabled = code === '' || code.length < 6;

  if (otpLoading) return <Loading />;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          {`  کد تایید ارسال شده به شماره ${msisdn.startsWith('0') ? msisdn : `0${msisdn}`} را وارد کنید`}
          <Typography
            component='span'
            color='secondary.main'
            fontWeight='bold'
            variant='subtitle2'
            sx={{ cursor: 'pointer' }}
            mr={0.5}
            onClick={() => setStep(2)}
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

export default OTPForm;
