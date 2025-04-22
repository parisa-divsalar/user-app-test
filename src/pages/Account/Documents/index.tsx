import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import useStyles from '@/pages/Account/Documents/useStyles.ts';
import { useDispatch } from 'react-redux';
import { setActiveStep } from '@/store/account/accountSlice.ts';
import { useNavigate } from 'react-router-dom';
import ImageContainer from '@/components/Account/ImageContainer';

const AccountDocuments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(setActiveStep(2));
    navigate(-1);
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography color='text.primary' variant='subtitle1'>
          تصاویر کارت ملی خود را وارد کنید
        </Typography>

        <Typography color='text.secondary' variant='subtitle2' mt={2} mb={1}>
          تصویر روی کارت
        </Typography>

        <ImageContainer />

        <Typography color='text.secondary' variant='subtitle2' mt={2} mb={1}>
          تصویر پشت کارت
        </Typography>

        <ImageContainer />
      </Stack>
      <Stack>
        <CustomButton fullWidth color='secondary' onClick={onSubmit}>
          ادامه مراحل افتتاح حساب
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default AccountDocuments;
