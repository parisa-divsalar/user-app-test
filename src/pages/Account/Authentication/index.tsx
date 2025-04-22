import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import { useDispatch } from 'react-redux';
import { setActiveStep } from '@/store/account/accountSlice.ts';
import { useNavigate } from 'react-router-dom';
import whiteVerified from '@/assets/images/icon/white-verified.svg';
import useStyles from '@/pages/Account/Authentication/useStyles.ts';

const AccountAuthentication = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(setActiveStep(3));
    navigate(-1);
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Stack className={classes.circleBox}>
          <img src={whiteVerified} alt='' width='32px' height='32px' />
        </Stack>

        <Typography color='text.primary' variant='subtitle1' mt={2}>
          ویدیوی احراز هویت
        </Typography>
        <Typography color='text.secondary' variant='subtitle2' mt={1} px={2} lineHeight={2}>
          با در نظر گرفتن شئونات اسلامی و بدون ماسک، عبارت خواسته شده در صفحه بعد را در قالب یک
          ویدیوی کوتاه برای ما ضبط و ارسال کنید.
        </Typography>
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' onClick={onSubmit}>
          آماده‌ام
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default AccountAuthentication;
