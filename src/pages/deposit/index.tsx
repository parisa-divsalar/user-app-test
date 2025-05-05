import { useState } from 'react';
import { useDepositStyles } from './useDepositStyles';

const Deposit = () => {
  const [amount, setAmount] = useState<string>('');
  const { depositContainer, form, formInputStyle, submitButton, formGroup } = useDepositStyles();
  return (
    <div className={depositContainer}>
      <form className={form}>
        <label htmlFor='amount'>مبلغ</label>
        <div className={formGroup}>
          <input
            id='amount'
            onChange={(event) => setAmount(event.target.value)}
            className={formInputStyle}
            placeholder='مبلغ واریزی'
          />
{amount && <span>{Number(amount).toLocaleString()} تومان</span>}
        </div>
        <button className={submitButton}>تایید و ادامه</button>
      </form>
    </div>
  );
};

export default Deposit;
