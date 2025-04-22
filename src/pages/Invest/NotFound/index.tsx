import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/UI/CustomButton';

import { PrivateRoutes } from '@/config/routes.ts';
import invest from '@/assets/images/icon/invest.svg';

import useStyles from '@/pages/Invest/NotFound/useStyles.ts';

const InvestNotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Stack className={classes.investContainer}>
          <img src={invest} alt='' />
        </Stack>

        <Typography className={classes.message} color='text.primary' mt={2}>
          هیچ سفارش خرید و فروشی تاکنون نداشته‌اید.
        </Typography>
      </Stack>

      <Stack my={2} width='90%'>
        <CustomButton
          fullWidth
          color='secondary'
          text='+ سفارش جدید'
          onClick={() => navigate(PrivateRoutes.addInvest)}
        />
      </Stack>
    </Stack>
  );
};

export default InvestNotFound;
