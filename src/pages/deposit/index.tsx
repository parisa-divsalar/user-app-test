import { useState } from 'react';
import { useDepositStyles } from './useDepositStyles';

const formatNumber = (value: string): string => {
  const numeric = value.replace(/,/g, '');
  if (isNaN(Number(numeric))) return '';
  return Number(numeric).toLocaleString('en-US');
};

const Deposit = () => {
  const [amount, setAmount] = useState<string>('');
  const { depositContainer, form, formInputStyle, submitButton, formGroup } = useDepositStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const numericOnly = rawValue.replace(/[^0-9]/g, '');
    const formatted = formatNumber(numericOnly);
    setAmount(formatted);
  };

  return (
    <div className={depositContainer}>
      <form className={form}>
        <label htmlFor='amount'>مبلغ</label>
        <div className={formGroup}>
          <input
            id='amount'
            onChange={handleChange}
            className={formInputStyle}
            placeholder='مبلغ واریزی'
            value={amount}
          />
          {amount && <span>{amount} تومان</span>}
        </div>
        <button className={submitButton}>تایید و ادامه</button>
      </form>
    </div>
  );
};

export default Deposit;
