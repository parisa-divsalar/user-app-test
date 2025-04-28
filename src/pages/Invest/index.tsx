import { Stack } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';

import InvestNotFound from '@/pages/Invest/NotFound';
import { PrivateRoutes } from '@/config/routes.ts';
import { useNavigate } from 'react-router-dom';
import InvestCard from '@/components/Card/Invest';
import useStyles from '@/pages/Invest/useStyles.ts';
import {  useState } from 'react';
import { useGetAllUserOrders } from '@/services/orders/get-all-user-orders.controller';
import { Order } from '@/type/user-order';
import InvestInfoDrawer from './Info';

const Invest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectInvest, setSelectInvest] = useState<Order>();
  const {data:userOrders,isLoading}=useGetAllUserOrders();
const {body:userOrderList}={...userOrders?.data};

const [getAssetId,setGetAssetId]=useState<number>(0);
if(isLoading) return <>loading</>;
const filteredById=userOrderList && userOrderList.find(item=>item.created_at_unix===getAssetId);

  return (
    <>
   {userOrderList ? <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        {userOrderList.map((item,index) => (
          <InvestCard
            key={item.asset_id+'_'+index}
            invest={item}
            setSelectInvest={setSelectInvest}
            setOpenDrawer={setOpenDrawer}
            setGetAssetId={setGetAssetId}
          />
        ))}
      </Stack>

      <Stack my={2} >
        <CustomButton fullWidth color='secondary' onClick={() => navigate(PrivateRoutes.addInvest)}>
          + سفارش جدید
        </CustomButton>
      </Stack>

   {filteredById && (
  <InvestInfoDrawer
    openDrawer={openDrawer}
    closeDrawer={() => setOpenDrawer(false)}
    invest={filteredById}
  />
)}
    </Stack>:<InvestNotFound/>}
    </>
  );
};

export default Invest;
