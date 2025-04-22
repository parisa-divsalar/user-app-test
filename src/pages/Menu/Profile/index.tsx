import { Stack } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import bgProfile from '@/assets/images/bg/bg-profile.svg';
import { useEffect, useState } from 'react';
import CustomInput from '@/components/UI/CustomInput';
import { emailValidation, isNationalCodeValid, msisdnValidation } from '@/utils/validation.ts';
import { useSelector } from 'react-redux';
import { profileSelector } from '@/store/user/userSelecor.ts';
import moment from 'moment-jalaali';
import useStyles from '@/pages/Menu/Profile/useStyles.ts';

const Profile = () => {
  const classes = useStyles();

  const [name, setName] = useState<string>('');
  const [fatherName, setFatherName] = useState<string>('');
  const [nationalCode, setNationalCode] = useState<string>('');
  const [nationCodeError, setNationCodeError] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [msisdn, setMsisdn] = useState<string>('');
  const [msisdnError, setMsisdnError] = useState(false);
  const [loading] = useState<boolean>(false);

  const profile = useSelector(profileSelector);

  const onSubmit = () => {};

  useEffect(() => {
    if (profile) {
      const { name, email, nationalCode, birthDate } = profile;
      setName(name);
      setEmail(email);
      setNationalCode(nationalCode);
      setBirthDate(moment(birthDate).format('jYYYY/jMM/jDD'));
    }
  }, [profile]);

  useEffect(() => {
    if (email && !emailValidation(email)) setEmailError(true);
    else if (emailError) setEmailError(false);
  }, [email]);

  useEffect(() => {
    if (nationalCode && !isNationalCodeValid(nationalCode)) setNationCodeError(true);
    else if (nationCodeError) setNationCodeError(false);
  }, [nationalCode]);

  return (
    <Stack className={classes.mainSetting}>
      <Stack className={classes.content}>
        <img src={bgProfile} alt='' width='211px' />

        <CustomInput
          placeholder='نام و نام خانوادگی'
          value={name}
          maxLength={40}
          onChangeHandler={(value) => setName(value)}
        />

        <CustomInput
          placeholder='کد ملی'
          value={nationalCode}
          inputMode='numeric'
          helperText={nationCodeError ? 'کد ملی وارد شده صحیح نمی‌باشد' : ''}
          error={nationCodeError}
          maxLength={10}
          onChangeHandler={(value) => setNationalCode(value)}
        />

        <CustomInput label='' placeholder='تاریخ تولد' value={birthDate} disabled />

        <CustomInput
          placeholder='نام پدر'
          value={fatherName}
          maxLength={40}
          onChangeHandler={(value) => setFatherName(value)}
        />

        <CustomInput
          label=''
          placeholder='شماره تلفن همراه'
          value={msisdn}
          helperText={msisdnError ? 'شماره همراه وارد شده اشتباه است.' : ''}
          maxLength={msisdn.startsWith('0') ? 11 : 10}
          error={msisdnError}
          inputMode='numeric'
          onChangeHandler={(value) => {
            setMsisdn(value);
            if (msisdnValidation(value) && value !== '') setMsisdnError(true);
            else setMsisdnError(false);
          }}
        />

        <CustomInput
          placeholder='ایمیل'
          value={email}
          error={emailError}
          helperText={emailError ? 'ایمیل وارد شده صحیح نمی‌باشد' : ''}
          maxLength={40}
          inputMode='email'
          onChangeHandler={(value) => setEmail(value)}
        />
      </Stack>

      <Stack width='100%' p={2}>
        <CustomButton loading={loading} onClick={onSubmit} color='secondary'>
          ذخیره تغییرات
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default Profile;
