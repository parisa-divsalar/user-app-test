import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput, { typeTextField } from '@/components/UI/CustomInput';
import useStyles from '@/pages/Menu/Security/Change/Password/useStyles.ts';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { checkPasswordLength, isContainsLowercase, validateDigit } from '@/utils/validation.ts';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ChangePasswordDrawer from '@/pages/Menu/Security/Change/Password/Result';

const ChangePassword = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepaid, setNewPasswordRepaid] = useState('');
  const [type, setType] = useState<typeTextField>('password');

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [error] = useState<boolean>(false);

  const onSubmit = () => {
    setOpenDrawer(true);
  };

  const disabled =
    password === '' ||
    newPassword === '' ||
    newPasswordRepaid === '' ||
    newPassword !== newPasswordRepaid ||
    !isContainsLowercase(newPassword) ||
    checkPasswordLength(newPassword) ||
    validateDigit(newPassword);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography my={1} color='text.primary' variant='subtitle2'>
          برای تغییر رمز عبور اطلاعات زیر را تکمیل کنید.
        </Typography>

        <CustomInput
          label=''
          placeholder='رمز عبور فعلی'
          value={password}
          type={type}
          endIcon={
            type === 'password' ? (
              <IconButton onClick={() => setType('text')}>
                <VisibilityOffIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            ) : (
              <IconButton onClick={() => setType('password')}>
                <VisibilityIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            )
          }
          onChangeHandler={(value) => setPassword(value)}
        />

        <CustomInput
          label=''
          placeholder='رمز عبور جدید'
          value={newPassword}
          type={type}
          endIcon={
            type === 'password' ? (
              <IconButton onClick={() => setType('text')}>
                <VisibilityOffIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            ) : (
              <IconButton onClick={() => setType('password')}>
                <VisibilityIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            )
          }
          onChangeHandler={(value) => setNewPassword(value)}
        />

        <CustomInput
          label=''
          placeholder=' تکرار رمز عبور جدید'
          value={newPasswordRepaid}
          type={type}
          endIcon={
            type === 'password' ? (
              <IconButton onClick={() => setType('text')}>
                <VisibilityOffIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            ) : (
              <IconButton onClick={() => setType('password')}>
                <VisibilityIcon sx={{ color: '#6A6E73' }} fontSize='small' />
              </IconButton>
            )
          }
          onChangeHandler={(value) => setNewPasswordRepaid(value)}
        />

        {newPassword !== '' && (
          <>
            <Stack direction='row' className={classes.passwordRule}>
              {isContainsLowercase(newPassword) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={isContainsLowercase(newPassword) ? 'text.primary' : 'error.main'}
              >
                شامل حروف بزرگ و کوچک انگلیسی
              </Typography>
            </Stack>

            <Stack direction='row' className={classes.passwordRule}>
              {!checkPasswordLength(newPassword) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={!checkPasswordLength(newPassword) ? 'text.primary' : 'error.main'}
              >
                شامل حداقل ۸ کاراکتر
              </Typography>
            </Stack>

            <Stack direction='row' className={classes.passwordRule}>
              {!validateDigit(newPassword) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={!validateDigit(newPassword) ? 'text.primary' : 'error.main'}
              >
                شامل عدد
              </Typography>
            </Stack>
          </>
        )}
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تغییر رمز عبور
        </CustomButton>
      </Stack>

      <ChangePasswordDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        error={error}
      />
    </Stack>
  );
};

export default ChangePassword;
