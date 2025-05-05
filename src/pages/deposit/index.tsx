import { useState } from 'react';
import { useDepositStyles } from './useDepositStyles';
import CustomInput from '@/components/UI/CustomInput';
import CustomButton from '@/components/UI/CustomButton';
import { Typography } from '@mui/material';

const formatNumber = (value: string): string => {
  const numeric = value.replace(/,/g, '');
  if (isNaN(Number(numeric))) return '';
  return Number(numeric).toLocaleString('en-US');
};

const Deposit = () => {
  const [amount, setAmount] = useState<string>('');
  const { depositContainer, form, formInputStyle, submitButton } = useDepositStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const numericOnly = rawValue.replace(/[^0-9]/g, '');
    const formatted = formatNumber(numericOnly);
    setAmount(formatted);
  };

  return (
    <div className={depositContainer}>
      <form className={form}>
        <Typography component='label' color='text.primary' variant='subtitle1' htmlFor='amount'>
          مبلغ
        </Typography>
        {/*<div className={formGroup}>*/}
          <CustomInput
            id='amount'
            onChangeHandler={handleChange}
            className={formInputStyle}
            placeholder='مبلغ واریزی'
            value={amount}
          />
        {/*  {amount && (*/}
        {/*    <Typography component='span' variant='subtitle2' color='text.primary'>*/}
        {/*      {amount} تومان*/}
        {/*    </Typography>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className={submitButton}>
          <CustomButton className={submitButton} color='secondary'>
            تایید و ادامه
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
