import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import { isNationalCodeValid } from '@/utils/validation.ts';
import useStyles from '@/pages/Menu/Sejam/NationalCode/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';

const NationalCodeSejam = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [editNationCode, setEditNationCode] = useState<boolean>(false);
  const [nationCode, setNationCode] = useState<string>('0173992951');
  const [nationCodeError, setNationCodeError] = useState<boolean>(false);

  const onSubmit = () => {
    navigate(PrivateRoutes.otpSejam);
  };

  const disabled = nationCode === '' || nationCodeError;

  useEffect(() => {
    if (nationCode && !isNationalCodeValid(nationCode)) setNationCodeError(true);
    else if (nationCodeError) setNationCodeError(false);
  }, [nationCode]);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary' variant='subtitle2'>
          کد ملی خود را وارد کنید
        </Typography>

        <CustomInput
          label=''
          placeholder='کد ملی ده رقمی'
          value={nationCode}
          disabled={!editNationCode}
          inputMode='numeric'
          helperText={nationCodeError ? 'کد ملی وارد شده اشتباه است.' : ''}
          error={nationCodeError}
          maxLength={10}
          onChangeHandler={(value) => setNationCode(value)}
        />

        <Typography
          color='secondary.main'
          variant='subtitle2'
          textAlign='left'
          mt={0.5}
          sx={{ cursor: 'pointer' }}
          onClick={() => setEditNationCode(true)}
        >
          ویرایش کد ملی
        </Typography>
      </Stack>
      <Stack>
        <Typography variant='subtitle2' textAlign='center' mb={2} color='text.secondary'>
          بر اساس دستورالعمل‌های سازمان بورس، هویت کاربران بر اساس کد ملی بررسی می‌شود.
        </Typography>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default NationalCodeSejam;
