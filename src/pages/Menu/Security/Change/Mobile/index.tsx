import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import useStyles from '@/pages/Menu/Security/Change/Mobile/useStyles.ts';
import { msisdnValidation } from '@/utils/validation.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';

const ChangeMobileNumber = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [msisdn, setMsisdn] = useState<string>('');
  const [msisdnError, setMsisdnError] = useState(false);

  const onSubmit = () => {
    navigate(PrivateRoutes.otpChangeMobile, { state: { msisdn } });
  };

  const disabled = msisdn == '' || msisdnValidation(msisdn);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          شماره تلفن همراه جدید خود را وارد کنید.
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

        <Typography variant='subtitle2' color='secondary.main' mt={1}>
          شماره تلفن همراه جدید باید به نام شما باشد.
        </Typography>
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید و ادامه
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default ChangeMobileNumber;
