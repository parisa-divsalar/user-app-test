import { FunctionComponent, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import InvestInfoRow from '@/pages/Invest/Add/Result/Row';
import {
  getStatusBgColor,
  getStatusTextColor,
  translateInvestStatus,

} from '@/constants/translate.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { Order } from '@/type/user-order';
import { useCancelOrder } from '@/services/orders/cancel-user-order.controller';
import { useQueryClient } from '@tanstack/react-query';

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

  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    padding: '0.2rem 0.5rem',
  },
}));

interface InvestResultDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
  invest: Order;
}

const InvestInfoDrawer: FunctionComponent<InvestResultDrawerProps> = (props) => {
  const { openDrawer, closeDrawer, invest } = props;

  const navigate = useNavigate();
  const {
state,side,available_units,order_id
  } = invest ;
  const classes = useStyles();
const queryClient=useQueryClient()
  const [openCancelInvest, setOpenCancelInvest] = useState<boolean>(false);
  const theme = useSelector(themeSelector);
const {mutate,isSuccess}=useCancelOrder()
  const  handleCancelOrder=(asset_id:string)=>{
mutate(asset_id);
if(isSuccess) queryClient.invalidateQueries({queryKey:['user-orders']});
}
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
        {!openCancelInvest && (
          <Typography color='text.primary' variant='subtitle1' mt={2} textAlign='center' px={4}>
            جزئیات سفارش
          </Typography>
        )}

        {openCancelInvest ? (
          <Typography color='text.primary' variant='subtitle2' mt={2} textAlign='center' px={4}>
            آیا از لغو این سفارش مطمئن هستید؟
          </Typography>
        ) : (
          <>
            <InvestInfoRow
              label='نوع معامله'
              value={side ==='buy' ? 'خرید' : 'فروش'}
            />
            <InvestInfoRow label='نوع سرمایه گذاری' value={
              // translateInvestType(investType)
              'طلا'
            } />
            <InvestInfoRow label='تعداد واحد' value={available_units} />
            <InvestInfoRow label='تاریخ و ساعت ' value='۱۴۰۴/۰۴/۱۹-۱۲:۱۰' />
            <InvestInfoRow
              label='وضعیت'
              value={
                <Stack
                  className={classes.statusContainer}
                  bgcolor={getStatusBgColor(state, theme)}
                >
                  <Typography variant='caption' color={getStatusTextColor(state)}>
                    {translateInvestStatus(state)}
                  </Typography>
                </Stack>
              }
            />
          </>
        )}

        {openCancelInvest ? (
          <Stack direction='row' mt={4} width='100%' gap={2}>
            <CustomButton
              fullWidth
              color='error'
              onClick={() => {
                closeDrawer();
                setTimeout(() => {
                  setOpenCancelInvest(false);
                }, 500);
                handleCancelOrder(order_id);
              }}
            >
              بله
            </CustomButton>

            <CustomButton
              fullWidth
              color='secondary'
              variant='outlined'
              onClick={() => setOpenCancelInvest(false)}
            >
              خیر
            </CustomButton>
          </Stack>
        ) : (
          <Stack direction='row' mt={4} width='100%' gap={2}>
            <CustomButton
              fullWidth
              color='secondary'
              variant='outlined'
              onClick={() =>
                navigate(`${PrivateRoutes.addInvest}?${order_id}#edit`, { state: { invest }  },)
              }
            >
              ویرایش
            </CustomButton>
            <CustomButton fullWidth color='error' onClick={() => setOpenCancelInvest(true)}>
              لغو
            </CustomButton>
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};

export default InvestInfoDrawer;
