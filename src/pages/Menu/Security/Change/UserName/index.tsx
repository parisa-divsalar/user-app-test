import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import ChangeUserNameDrawer from '@/pages/Menu/Security/Change/UserName/Result';
import useStyles from '@/pages/Menu/Security/Change/UserName/useStyles.ts';

const ChangeUserName = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [error] = useState<boolean>(false);

  const onSubmit = () => {
    setOpenDrawer(true);
  };

  const disabled = userName === '' || newUserName === '';

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography my={2} color='text.primary' variant='subtitle2'>
          برای تغییر نام کاربری اطلاعات زیر را تکمیل کنید.
        </Typography>

        <CustomInput
          label=''
          placeholder='نام کاربری فعلی'
          value={userName}
          maxLength={30}
          onChangeHandler={(value) => setUserName(value)}
        />

        <CustomInput
          label=''
          placeholder='نام کاربری جدید'
          value={newUserName}
          maxLength={30}
          onChangeHandler={(value) => setNewUserName(value)}
        />
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تغییر نام کاربری
        </CustomButton>
      </Stack>

      <ChangeUserNameDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        error={error}
      />
    </Stack>
  );
};

export default ChangeUserName;
