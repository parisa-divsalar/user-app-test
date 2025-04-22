import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import Lottie from 'lottie-react';
import blockCheck from '@/assets/images/icon/block-check.svg';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import success from '@/assets/images/lottie/success.json';
import bgAccountResult from '@/assets/images/bg/bg-account-result.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/config/routes.ts';
import useStyles from '@/pages/Account/Result/useStyles.ts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/store/user/userSlice.ts';

const AccountResult = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = state?.error || false;

  useEffect(() => {
    if (!error) {
      setTimeout(() => {
        dispatch(setToken({ token: 'sd', userId: 'rt1' }));
        navigate(PrivateRoutes.dashboard);
      }, 3_000);
    }
  }, []);

  return (
    <Stack className={classes.mainContainer} sx={{ backgroundImage: `url(${bgAccountResult})` }}>
      <Stack className={classes.content}>
        <Stack className={classes.lottieContainer}>
          {!error && <Lottie animationData={success} loop={true} />}
          <Stack bgcolor={error ? 'error.main' : 'primary.main'} className={classes.iconBox}>
            {error ? (
              <HighlightOffRoundedIcon fontSize='large' />
            ) : (
              <img src={blockCheck} alt='' width='60%' />
            )}
          </Stack>
        </Stack>

        <Typography fontWeight='bold' variant='subtitle1'>
          {error ? 'دوست عزیز اطلاعات شما ثبت نشد.' : 'دوست عزیز اطلاعات شما با موفقیت دریافت شد'}
        </Typography>

        <Typography variant='subtitle2' mt={1} mb={4} lineHeight={2} textAlign='center'>
          {error
            ? 'مدارک شما مخدوش است، لطفا مجدد بارگزاری کنید (لطفا از کیفیت تصویر ارسالی و وضوح آن اطمینان حاصل کنید)'
            : 'اطلاعات شما را تا یک ساعت آینده بررسی کرده و نتیجه را از طریق پیامک برایتان ارسال می‌کنیم.'}
        </Typography>
      </Stack>

      {error && (
        <CustomButton
          fullWidth
          variant='contained'
          color='primary'
          onClick={() => navigate(PublicRoutes.accountDocuments)}
        >
          بارگذاری مجدد کارت ملی
        </CustomButton>
      )}
    </Stack>
  );
};

export default AccountResult;
