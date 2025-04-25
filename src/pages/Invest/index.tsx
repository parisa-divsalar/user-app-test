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
import { useAllUsersAssets } from '@/services/users-assets/all-users-assets.controller';
import { useGetAllUserOrders } from '@/services/orders/get-all-user-orders.controller';

const Invest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectInvest, setSelectInvest] = useState<IInvest | undefined>(undefined);
  const {data:userOrders}=useGetAllUserOrders();
const {body:userOrderList}={...userOrders?.data}
const {data}=useAllUsersAssets()
  if (!userOrderList) return <InvestNotFound />;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        {userOrderList.map((item) => (
          <InvestCard
            key={item.asset_id}
            invest={item}
            setSelectInvest={setSelectInvest}
            setOpenDrawer={setOpenDrawer}
          />
        ))}
      </Stack>

      <Stack mb={2}>
        <CustomButton fullWidth color='secondary' onClick={() => navigate(PrivateRoutes.addInvest)}>
          + سفارش جدید
        </CustomButton>
      </Stack>

      <InvestInfoDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        invest={selectInvest}
      />
    </Stack>
  );
};

export default Invest;
