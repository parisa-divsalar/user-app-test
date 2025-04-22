import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/UI/CustomButton';
import logo from '@/assets/images/logo/logo.svg';
import { PrivateRoutes } from '@/config/routes.ts';

const NotTicketFound = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems='center' height='100%' justifyContent='space-between'>
      <Stack alignItems='center' flexGrow={1} justifyContent='center'>
        <img src={logo} alt='' width='64px' />
        <Typography color='text.primaty' mt={1} variant='subtitle1'>
          شما تا کنون تیکتی ثبت نکرده اید!
        </Typography>
      </Stack>

      <Stack my={2} width='90%'>
        <CustomButton
          fullWidth
          color='secondary'
          text='ارسال تیکت جدید'
          onClick={() => navigate(PrivateRoutes.addTicket)}
        />
      </Stack>
    </Stack>
  );
};

export default NotTicketFound;
