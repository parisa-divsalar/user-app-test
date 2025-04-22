import { Stack, Typography } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import useStyles from '@/components/Account/UserName/useStyles.ts';

interface UserNameFormProps {
  setStep: (step: number) => void;
}

const UserNameForm: FunctionComponent<UserNameFormProps> = (props) => {
  const { setStep } = props;
  const classes = useStyles();
  const [userName, setUserName] = useState<string>('');
  const [userNameError, setUserNameError] = useState<boolean>(false);

  const onSubmit = () => {
    setStep(5);
  };

  const disabled = userName === '' || userNameError;

  useEffect(() => {
    if (userName && userName.length < 8) setUserNameError(true);
    else setUserNameError(false);
  }, [userName]);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          نام کاربری دلخواه خود را وارد کنید
        </Typography>

        <CustomInput
          label=''
          placeholder='نام کاربری'
          value={userName}
          helperText={
            userNameError ? 'طول نام کاربری  باید حداقل ۸ کاراکتر و حداکثر ۲۰ کاراکتر باشد.' : ''
          }
          error={userNameError}
          maxLength={20}
          onChangeHandler={(value) => setUserName(value)}
        />
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید و ادامه
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default UserNameForm;
