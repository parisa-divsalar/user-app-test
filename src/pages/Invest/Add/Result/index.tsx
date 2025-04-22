import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import successIcon from '@/assets/images/icon/success.svg';
import errorIcon from '@/assets/images/icon/error.svg';
import { OrderType } from '@/type/invest.ts';

const useStyles = makeStyles(() => ({
  paper: {
    width: '100% !important',
    maxWidth: '32rem !important',
    margin: '0 auto !important',
    borderTopLeftRadius: '1.5rem !important',
    borderTopRightRadius: '1.5rem !important',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    padding: '1rem 1.5rem',
  },
}));

interface InvestResultDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
  error: boolean;
  orderType: OrderType;
  onSubmit?: () => void;
}

const InvestResultDrawer: FunctionComponent<InvestResultDrawerProps> = (props) => {
  const { openDrawer, closeDrawer, error, onSubmit, orderType } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor='bottom'
      open={openDrawer}
      onClose={closeDrawer}
      classes={{
        paper: classes.paper,
      }}
    >
      <Stack className={classes.content}>
        <Stack>
          <img src={error ? errorIcon : successIcon} alt='' width='40px' />
        </Stack>

        <Typography color='text.secondary' variant='subtitle2' mt={2} textAlign='center' px={4}>
          {error
            ? orderType === OrderType.BUY
              ? 'سفارش خرید شما انجام نشد، دوباره اقدام کنید.'
              : 'سفارش فروش شما انجام نشد، دوباره اقدام کنید.'
            : orderType === OrderType.SELL
              ? 'سفارش فروش با موفقیت انجام شد'
              : 'سفارش خرید با موفقیت انجام شد.'}
        </Typography>

        <Stack width='75%' mt={4}>
          <CustomButton fullWidth color={error ? 'error' : 'success'} onClick={onSubmit}>
            {error ? 'تلاش دوباره' : 'متوجه شدم'}
          </CustomButton>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default InvestResultDrawer;
