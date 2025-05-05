import { useState } from 'react';
import { useDepositStyles } from './useDepositStyles';
import CustomInput from '@/components/UI/CustomInput';
import CustomButton from '@/components/UI/CustomButton';
import { Typography } from '@mui/material';


const Deposit = () => {
  const { depositContainer, form, submitButton } = useDepositStyles();


  return (
    <div className={depositContainer}>
      <form className={form}>
        <Typography component='label' color='text.primary' variant='subtitle1' htmlFor='amount'>
          مبلغ
        </Typography>
        {/*<div className={formGroup}>*/}
          <CustomInput
              inputMode='numeric'
            placeholder='مبلغ واریزی'
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
