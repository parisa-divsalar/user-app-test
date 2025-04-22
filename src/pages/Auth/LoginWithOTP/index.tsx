import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import { msisdnValidation } from '@/utils/validation.ts';
import useStyles from '@/pages/Auth/LoginWithOTP/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/config/routes.ts';
import { login } from '@/apis/auth.ts';

const LoginWithOTP = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [msisdn, setMsisdn] = useState<string>('');
  const [msisdnError, setMsisdnError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {
    setLoading(true);
    const body = {
      method: 'mobile',
      mobile: msisdn,
    };

    login(body)
      .then((res: any) =>
        navigate(PublicRoutes.otp, { state: { msisdn, requestId: res.request_id } }),
      )
      .finally(() => setLoading(false));
  };

  const disabled = msisdn == '' || msisdnValidation(msisdn);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          شماره موبایل خود را وارد کنید.
        </Typography>

        <CustomInput
          label=''
          placeholder='شماره تلفن همراه'
          value={msisdn}
          helperText={msisdnError ? 'شماره همراه وارد شده اشتباه است.' : ''}
          maxLength={msisdn.startsWith('0') ? 11 : 10}
          error={msisdnError}
          autoFocus
          onEnter={() => !disabled && onSubmit()}
          inputMode='numeric'
          onChangeHandler={(value) => {
            setMsisdn(value);
            if (msisdnValidation(value) && value !== '') setMsisdnError(true);
            else setMsisdnError(false);
          }}
        />
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

export default LoginWithOTP;
