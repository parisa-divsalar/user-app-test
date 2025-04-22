import { Stack, Typography } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import { isNationalCodeValid } from '@/utils/validation.ts';
import useStyles from '@/components/Account/NationalCode/useStyles.ts';
import CustomDatePicker from '@/components/UI/CustomDatePicker';
import { DateValueProps } from '@/type/common.ts';

interface NationalCodeFormProps {
  setStep: (step: number) => void;
  nationCode: string;
  setNationCode: (nationCode: string) => void;
  birthDate: DateValueProps | undefined;
  setBirthDate: (birthDate: DateValueProps | undefined) => void;
}

const NationalCodeForm: FunctionComponent<NationalCodeFormProps> = (props) => {
  const { setStep, nationCode, setNationCode, birthDate, setBirthDate } = props;
  const classes = useStyles();

  const [nationCodeError, setNationCodeError] = useState<boolean>(false);

  const onSubmit = () => {
    setStep(2);
  };

  const disabled = nationCode === '' || nationCodeError;

  useEffect(() => {
    if (nationCode && !isNationalCodeValid(nationCode)) setNationCodeError(true);
    else if (nationCodeError) setNationCodeError(false);
  }, [nationCode]);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          کد ملی خود را وارد کنید
        </Typography>

        <CustomInput
          label=''
          placeholder='کد ملی ده رقمی'
          value={nationCode}
          inputMode='numeric'
          helperText={nationCodeError ? 'کد ملی وارد شده اشتباه است.' : ''}
          error={nationCodeError}
          maxLength={10}
          onChangeHandler={(value) => setNationCode(value)}
        />

        <CustomDatePicker title='تاریخ تولد' date={birthDate} setDate={setBirthDate} />
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید و ادامه
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default NationalCodeForm;
