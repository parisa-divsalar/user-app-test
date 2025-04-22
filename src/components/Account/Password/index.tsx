import { IconButton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput, { typeTextField } from '@/components/UI/CustomInput';
import { checkPasswordLength, isContainsLowercase, validateDigit } from '@/utils/validation.ts';
import useStyles from '@/components/Account/Password/useStyles.ts';
import { setActiveStep } from '@/store/account/accountSlice.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/config/routes.ts';

const PasswordForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [type, setType] = useState<typeTextField>('password');

  const onSubmit = () => {
    dispatch(setActiveStep(1));
    navigate(PublicRoutes.accountWizard, { replace: true });
  };

  useEffect(() => {
    if (
      password.length > 6 &&
      !validateDigit(password) &&
      !checkPasswordLength(password) &&
      isContainsLowercase(password)
    )
      setDisabled(false);
    else setDisabled(true);
  }, [password]);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={2} color='text.primary'>
          یک رمز عبور برای خود انتخاب کنید
        </Typography>

        <CustomInput
          label=''
          placeholder='رمز عبور شما'
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

        {password !== '' && (
          <>
            <Stack direction='row' className={classes.passwordRule}>
              {isContainsLowercase(password) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={isContainsLowercase(password) ? 'text.primary' : 'error.main'}
              >
                شامل حروف بزرگ و کوچک انگلیسی
              </Typography>
            </Stack>

            <Stack direction='row' className={classes.passwordRule}>
              {!checkPasswordLength(password) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={!checkPasswordLength(password) ? 'text.primary' : 'error.main'}
              >
                شامل حداقل ۸ کاراکتر
              </Typography>
            </Stack>

            <Stack direction='row' className={classes.passwordRule}>
              {!validateDigit(password) ? (
                <DoneRoundedIcon color='success' fontSize='small' />
              ) : (
                <HighlightOffRoundedIcon color='error' fontSize='small' />
              )}

              <Typography
                mt={0.5}
                variant='caption'
                color={!validateDigit(password) ? 'text.primary' : 'error.main'}
              >
                شامل عدد
              </Typography>
            </Stack>
          </>
        )}
      </Stack>
      <Stack>
        <Stack direction='row' className={classes.infoBox}>
          <InfoOutlinedIcon color='action' />
          <Typography color='text.secondary' variant='subtitle2'>
            توجه داشته باشید که رمز عبور شما به عنوان رمز بانکی شما استفاده خواهد شد!
          </Typography>
        </Stack>
        <CustomButton fullWidth color='secondary' disabled={disabled} onClick={onSubmit}>
          تایید و ادامه
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default PasswordForm;
