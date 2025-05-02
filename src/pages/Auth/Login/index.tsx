import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { login } from '@/apis/auth.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/config/routes.ts';
import bgLogin from '@/assets/images/bg/bg-login.svg';
import BANX from '@/assets/images/logo/banx.svg';
import logo from '@/assets/images/logo/logo.svg';
import fingerPrint from '@/assets/images/icon/fingerprint.svg';
import CustomInput, { typeTextField } from '@/components/UI/CustomInput';
import CustomButton from '@/components/UI/CustomButton';
import useStyles from '@/pages/Auth/Login/useStyles.ts';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { setToken } from '@/store/user/userSlice.ts';

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<typeTextField>('password');

  const onSubmit = () => {
    setLoading(true);
    const body = {
      method: 'username',
      username: userName,
      password: password,
    };

    login(body)
      .then((res: any) => {
        dispatch(setToken({ token: res.jwt, userId: res.user_id }));
        navigate(PrivateRoutes.dashboard);
      })
      .finally(() => setLoading(false));
  };

  const disabled = !userName || !password;

  return (
    <Stack className={classes.mainContainer}>
      <Stack sx={{ backgroundImage: `url(${bgLogin})` }}>
        <img src={BANX} alt='' width='156px' />
        <img src={logo} alt='' className={classes.logoContainer} />
      </Stack>

      <Stack>
        <Stack width='100%' pt={2}>
          <CustomInput
            label=''
            placeholder='نام کاربری'
            value={userName}
            maxLength={30}
            onChangeHandler={(value) => setUserName(value)}
          />

          <CustomInput
            label=''
            placeholder='رمز عبور'
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

          <Stack gap={2} mt={2}>
            <CustomButton
              fullWidth
              color='secondary'
              disabled={disabled || loading}
              loading={loading}
              onClick={onSubmit}
            >
              ورود به بنکس
            </CustomButton>

            <CustomButton
              fullWidth
              variant='outlined'
              color='secondary'
              onClick={() => navigate(PublicRoutes.loginWithOTP)}
            >
              ورود از طریق OTP
            </CustomButton>

            <IconButton disableRipple>
              <img src={fingerPrint} alt='' width='48px' />
            </IconButton>
          </Stack>
        </Stack>

        <Stack textAlign='center'>
          <Typography variant='subtitle1' color='secondary.A400' fontWeight='bold' mb={2}>
            نیاز به کمک دارم
          </Typography>

          <Typography variant='subtitle2' color='text.primary' fontWeight='bold'>
            نسخه ۳.۴
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
