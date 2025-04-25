import { Stack } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import { useSelector } from 'react-redux';
import { investSelector } from '@/store/user/userSelecor.ts';
import InvestNotFound from '@/pages/Invest/NotFound';
import { PrivateRoutes } from '@/config/routes.ts';
import { useNavigate } from 'react-router-dom';
import InvestCard from '@/components/Card/Invest';
import { IInvest } from '@/type/invest.ts';
import useStyles from '@/pages/Invest/useStyles.ts';
import InvestInfoDrawer from '@/pages/Invest/Info';
import { useState } from 'react';
import { useGetAllUserOrders } from '@/services/orders/get-all-user-orders.controller';
import { useAllUsersAssets } from '@/services/users-assets/all-users-assets.controller';
import { Order } from '@/type/user-order';

const Invest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectInvest, setSelectInvest] = useState<Order | undefined>(undefined);
  const {data:userOrders}=useGetAllUserOrders();
const {body:userOrderList}={...userOrders?.data};

// TODO:Fix test environment



if (!userOrderList) return <InvestNotFound />;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        {userOrderList.map((item,index) => (
          <InvestCard
            key={item.asset_id+'_'+index}
            invest={item}
            setSelectInvest={setSelectInvest}
            setOpenDrawer={setOpenDrawer}
          />
        ))}
      </Stack>

      <Stack my={2} >
        <CustomButton fullWidth color='secondary' onClick={() => navigate(PrivateRoutes.addInvest)}>
          + سفارش جدید
        </CustomButton>
      </Stack>

      {/* <InvestInfoDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        invest={selectInvest}
      /> */}
    </Stack>
  );
};

export default Invest;
