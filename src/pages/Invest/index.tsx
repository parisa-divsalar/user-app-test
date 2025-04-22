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

const Invest = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const investList = useSelector(investSelector);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectInvest, setSelectInvest] = useState<IInvest | undefined>(undefined);

  if (investList.length === 0) return <InvestNotFound />;

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        {investList.map((invest: IInvest) => (
          <InvestCard
            key={invest.id}
            invest={invest}
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
