import { Stack } from '@mui/material';
import LineStepper from '@/components/Account/LineStepper';
import { useState } from 'react';
import NationalCodeForm from '@/components/Account/NationalCode';
import useStyles from '@/pages/Account/Register/useStyles.ts';
import MobileNumberForm from '@/components/Account/MobileNumber';
import OTPForm from '@/components/Account/OTP';
import UserNameForm from '@/components/Account/UserName';
import PasswordForm from '@/components/Account/Password';
import { DateValueProps } from '@/type/common.ts';

const AccountRegister = () => {
  const classes = useStyles();
  const [step, setStep] = useState<number>(1);
  const [msisdn, setMsisdn] = useState<string>('');
  const [nationCode, setNationCode] = useState<string>('');
  const [birthDate, setBirthDate] = useState<DateValueProps | undefined>(undefined);

  const getContent = () => {
    switch (step) {
      case 1:
        return (
          <NationalCodeForm
            setStep={setStep}
            nationCode={nationCode}
            setNationCode={setNationCode}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
          />
        );
      case 2:
        return (
          <MobileNumberForm
            setStep={setStep}
            msisdn={msisdn}
            setMsisdn={setMsisdn}
            birthDate={birthDate}
            nationCode={nationCode}
          />
        );
      case 3:
        return <OTPForm msisdn={msisdn} setStep={setStep} />;
      case 4:
        return <UserNameForm setStep={setStep} />;
      case 5:
        return <PasswordForm />;
      default:
        return '';
    }
  };

  return (
    <Stack className={classes.mainContainer}>
      <LineStepper step={step} />
      {getContent()}
    </Stack>
  );
};

export default AccountRegister;
