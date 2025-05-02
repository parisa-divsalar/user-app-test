import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IInvest, InvestType } from '@/type/invest.ts';
import { useEffect, useState } from 'react';
import CustomInput from '@/components/UI/CustomInput';
import RowNAV from '@/pages/Invest/Add/Row';
import useStyles from '@/pages/Invest/Add/useStyles.ts';
import { addInvest, updateInvest } from '@/store/user/userSlice.ts';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import InvestResultDrawer from '@/pages/Invest/Add/Result';
import { commafy } from '@/utils/commafyHelper.ts';
import { CreateOrderData } from '@/type/user-order';
import { useCreateOrder } from '@/services/orders/create-order.controller';
import { useAddInvest } from '@/hooks/useAddInvest';

const AddInvest = () => {
  const {
    assetsData,
    assetId,
    setAssetId,
    assetSell,
    assetBuyValue,
    orderType,
    setOrderType,
    amount,
    setAmount,
  } = useAddInvest();

  const classes = useStyles();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [investType, setInvestType] = useState<InvestType>(InvestType.GOLD);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [anotherState, setAnotherState] = useState<string>('');
  const [numberOfUnits, setNumberOfUnits] = useState<string>('');
  const [notEnoughWallet] = useState<boolean>(false);
  const investState: any = state?.invest;

  const { mutate } = useCreateOrder();
  const handleChangeOrder = (event: any) => setOrderType(event.target.value);
  const handleChangeAmount = (value: string) => {
    const rawValue = value?.replace(/,/g, '');
    if (!/^\d*$/.test(rawValue)) return;
    const formattedValue = Number(rawValue).toLocaleString('en-US');
    setAmount(formattedValue);
    setAnotherState(rawValue);
  };

  const onSubmit = () => {
    const invest: IInvest = {
      id: generateFakeUUIDv4(),
      amount: amount?.replace(/,/g, ''),
      date: '۱۴۰۴/۰۴/۱۹-۱۲:۱۰',
      orderType,
      investType,
      numberOfUnits,
      status: state,
    };

    if (investState) dispatch(updateInvest({ id: investState.id, invest }));
    else dispatch(addInvest(invest));
    const buyAsset: CreateOrderData = {
      asset_id: assetId,
      side: orderType,
      asset_isin: 'IRTKZARV0001',
      budget_in_rials: Number(anotherState),
    };
    const sellAsset = {
      asset_id: assetId,
      side: orderType,
      asset_isin: 'IRTKZARV0001',
      volume: Number(anotherState),
    };

    if (orderType === 'buy') {
      mutate(buyAsset);
    } else {
      mutate(sellAsset);
    }
    setOpenDrawer(true);
  };

  useEffect(() => {
    if (investState) {
      setOrderType(investState.orderType);
      setInvestType(investState.investType);
      if (investState.amount) setAmount(commafy(investState.amount));
      setNumberOfUnits(investState.numberOfUnits);
    }
  }, [investState]);

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography color='text.primary' mt={1} variant='subtitle2'>
          نوع درخواست
        </Typography>

        <Stack className={classes.orderBox}>
          <RadioGroup
            row
            value={orderType}
            onChange={handleChangeOrder}
            sx={{ flexWrap: 'nowrap' }}
          >
            <FormControlLabel
              value={'buy'}
              onChange={() => setOrderType('buy')}
              control={<Radio color='secondary' />}
              label='خرید'
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              onChange={() => setOrderType('sell')}
              value={'sell'}
              control={<Radio color='secondary' />}
              label='فروش'
              sx={{ width: '100%' }}
            />
          </RadioGroup>
        </Stack>

        <Typography color='text.primary' mt={3} variant='subtitle2'>
          نوع سرمایه گذاری
        </Typography>

        <Stack className={classes.orderBox} mb={2}>
          {assetsData && (
            <RadioGroup
              row
              value={assetId}
              onChange={(e) => setAssetId(e.target.value)}
              sx={{ flexWrap: 'nowrap', display: 'flex', alignItems: 'center' }}
            >
              {assetsData.map((item, index) => (
                <FormControlLabel
                  key={item.asset_id + index}
                  value={item.asset_id}
                  control={<Radio color='secondary' />}
                  label={item.persian_name}
                  sx={{ width: '100%' }}
                />
              ))}
            </RadioGroup>
          )}
        </Stack>
        {orderType === 'buy' ? (
          <CustomInput
            placeholder='مبلغ(تومان)'
            value={amount}
            helperText={
              notEnoughWallet ? 'موجودی  کافی نیست، برای تکمیل خرید، حساب خود را شارژ کنید.' : ''
            }
            maxLength={15}
            ignoreNumeric
            error={notEnoughWallet}
            inputMode='numeric'
            onChangeHandler={handleChangeAmount}
          />
        ) : (
          <CustomInput
            label=''
            placeholder='تعداد واحد'
            value={numberOfUnits}
            helperText={notEnoughWallet ? 'موجودی حساب  شما کافی نیست.' : ''}
            maxLength={4}
            ignoreNumeric
            error={notEnoughWallet}
            inputMode='numeric'
            onChangeHandler={(value: string) => setNumberOfUnits(value)}
          />
        )}

        <Stack width='100%' alignItems='end'>
          {orderType === 'buy' ? (
            <CustomButton text='+ شارژ حساب' variant='text' color='secondary' />
          ) : (
            <Typography color='text.secondary' variant='subtitle2'>
              کل واحد
            </Typography>
          )}
        </Stack>

        {orderType === 'sell' && numberOfUnits && (
          <Stack className={classes.navBox}>
            <RowNAV label='تعداد کل موجودی' value='42' />
            <RowNAV label='مبلغ کل موجودی' value='12225000' unit='تومان' />
          </Stack>
        )}

        {orderType === 'sell' && numberOfUnits && assetSell && (
          <Stack className={classes.navBox}>
            <RowNAV label='مبلغ سفارش' value={String(assetSell?.net_income)} unit='تومان' />
            <RowNAV label='نرخ NAV' value={String(assetSell?.nav)} unit='تومان' />
            <RowNAV label='کارمزد' value={String(assetSell?.fee)} unit='تومان' />
            <RowNAV label='مبلغ قابل برداشت' value={String(assetSell?.gross_income)} unit='تومان' />
          </Stack>
        )}

        {orderType === 'buy' && amount && assetBuyValue && (
          <Stack className={classes.navBox}>
            <RowNAV label='نرخ NAV' value={String(assetBuyValue?.nav)} unit='تومان' />
            <RowNAV label='کارمزد' value={String(assetBuyValue?.fee)} unit='تومان' />
            <RowNAV
              label='تعداد قابل خرید'
              value={String(assetBuyValue?.units_might_bought)}
              unit='واحد'
            />
          </Stack>
        )}
      </Stack>

      <Stack my={2} width='90%'>
        <CustomButton
          fullWidth
          color='secondary'
          text='ثبت'
          onClick={onSubmit}
          disabled={orderType === 'buy' ? !amount : !numberOfUnits}
        />
      </Stack>

      <InvestResultDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        error={false}
        orderType={orderType}
        onSubmit={() => navigate(-1)}
      />
    </Stack>
  );
};

export default AddInvest;
