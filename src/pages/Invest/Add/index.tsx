import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IInvest, InvestType, OrderType } from '@/type/invest.ts';
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
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { CreateOrderData } from '@/type/user-order';
import { register } from 'module';

const AddInvest = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<OrderType>(OrderType.BUY);
  const [investType, setInvestType] = useState<InvestType>(InvestType.GOLD);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [numberOfUnits, setNumberOfUnits] = useState<string>('');
  const [notEnoughWallet] = useState<boolean>(false);
  const investState: any = state?.invest;

  const handleChangeOrder = (event: any) => setOrderType(event.target.value);
  const handleChangeInvest = (event: any) => setInvestType(event.target.value);

  const handleChangeAmount = (value: string) => {
    const rawValue = value?.replace(/,/g, '');
    if (!/^\d*$/.test(rawValue)) return;

    const formattedValue = Number(rawValue).toLocaleString('en-US');
    setAmount(formattedValue);
  };

  const onSubmit = () => {
    const invest: IInvest = {
      id: generateFakeUUIDv4(),
      amount: amount?.replace(/,/g, ''),
      date: '۱۴۰۴/۰۴/۱۹-۱۲:۱۰',
      orderType,
      investType,
      numberOfUnits,
      status: 'WAITING_TO_BUY',
    };

    if (investState) dispatch(updateInvest({ id: investState.id, invest }));
    else dispatch(addInvest(invest));

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

const {handleSubmit,control}=useForm<CreateOrderData>();
const onSubmitForm:SubmitHandler<CreateOrderData>= (data)=> {
  console.log(data);
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>    
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
             <Controller
            name="side"
           control={control}
           render={({ field }) => (
          <FormControlLabel
            {...field}
            value="BUY"
            control={<Radio color="secondary" />}
            label="خرید"
            sx={{ width: "100%" }}
          />
        )}
      />
            <FormControlLabel
              value={OrderType.SELL}
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
          <RadioGroup
            row
            value={investType}
            onChange={handleChangeInvest}
            sx={{ flexWrap: 'nowrap' }}
          >
            <FormControlLabel
              value={InvestType.GOLD}
              control={<Radio color='secondary' />}
              label='طلا'
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              value={InvestType.HOUSING}
              control={<Radio color='secondary' />}
              label='مسکن'
              sx={{ width: '100%' }}
            />
          </RadioGroup>

          <RadioGroup
            row
            value={investType}
            onChange={handleChangeInvest}
            sx={{ flexWrap: 'nowrap' }}
          >
            <FormControlLabel
              value={InvestType.BURSE}
              control={<Radio color='secondary' />}
              label='بورس'
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              value={InvestType.SAVINGS}
              control={<Radio color='secondary' />}
              label='پس انداز'
              sx={{ width: '100%' }}
            />
          </RadioGroup>
        </Stack>

        {orderType === OrderType.BUY ? (
          <CustomInput
            label=''
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
          {orderType === OrderType.BUY ? (
            <CustomButton text='+ شارژ حساب' variant='text' color='secondary' />
          ) : (
            <Typography color='text.secondary' variant='subtitle2'>
              کل واحد
            </Typography>
          )}
        </Stack>

        {orderType === OrderType.SELL && numberOfUnits && (
          <Stack className={classes.navBox}>
            <RowNAV label='تعداد کل موجودی' value='42' />
            <RowNAV label='مبلغ کل موجودی' value='12225000' unit='تومان' />
          </Stack>
        )}

        {orderType === OrderType.SELL && numberOfUnits && (
          <Stack className={classes.navBox}>
            <RowNAV label='مبلغ سفارش' value='12000000' unit='تومان' />
            <RowNAV label='نرخ NAV' value='5000' unit='تومان' />
            <RowNAV label='کارمزد' value='17000' unit='تومان' />
            <RowNAV label='مبلغ قابل برداشت' value='12225000' unit='تومان' />
          </Stack>
        )}

        {orderType === OrderType.BUY && amount && (
          <Stack className={classes.navBox}>
            <RowNAV label='نرخ NAV' value='5000' unit='تومان' />
            <RowNAV label='کارمزد' value='17000' unit='تومان' />
            <RowNAV label='تعداد قابل خرید' value='35' unit='واحد' />
          </Stack>
        )}
      </Stack>

      <Stack my={2} width='90%'>
        <CustomButton
          fullWidth
          color='secondary'
          text='ثبت'
          onClick={onSubmit}
          disabled={orderType === OrderType.BUY ? !amount : !numberOfUnits}
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
    </form>

  );
};

export default AddInvest;
