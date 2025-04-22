import { Stack, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import { msisdnValidation } from '@/utils/validation.ts';
import useStyles from '@/components/Account/MobileNumber/useStyles.ts';
import { createUser } from '@/apis/user.ts';
import { UserProfileType } from '@/type/user.ts';
import { DateValueProps } from '@/type/common.ts';

interface MobileNumberFormProps {
  setStep: (step: number) => void;
  msisdn: string;
  nationCode: string;
  birthDate: DateValueProps | undefined;
  setMsisdn: (msisdn: string) => void;
}

const MobileNumberForm: FunctionComponent<MobileNumberFormProps> = (props) => {
  const { setStep, msisdn, setMsisdn, nationCode, birthDate } = props;
  const classes = useStyles();
  const [msisdnError, setMsisdnError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {
    setLoading(true);

    const userBody: UserProfileType = {
      mobile_number: msisdn,
      national_id: nationCode,
      birth_day: birthDate?.day,
      birth_month: birthDate?.month,
      birth_year: birthDate?.year,
    };

    createUser(userBody)
      .then((res: any) => {
        console.log('res:', res);
        setStep(3);
      })
      .finally(() => setLoading(false));
  };

  const disabled = msisdn == '' || msisdnValidation(msisdn);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          شماره تلفن همراه خود را وارد کنید
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

        <Typography variant='subtitle2' color='text.secondary' mt={1}>
          شماره تلفن همراه باید به نام خودتان باشد
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
          دریافت کد تایید
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default MobileNumberForm;
