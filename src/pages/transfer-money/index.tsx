import { EditIcon } from '@/components/UI/Icons/transferMoney/EditIcon';
import useStyles from './useStyles';
import { TransferMoneyCard } from '@/components/transfer-money/TransferMoneyCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TransferMoney = () => {
  const {
    transferMonyContainer,
    transferFrom,
    transferTitle,
    transferFromButton,
    submitButtonStyle,
    mount,
    inputStyle,
  } = useStyles();
  const [mountValue, setMountValue] = useState('');
  return (
    <div className={transferMonyContainer}>
      <div className={transferFrom}>
        <h1 className={transferTitle}>انتقال از</h1>
        <Link to={'/transferMoney/transmissionSourceSwitcher'} className={transferFromButton}>
          <EditIcon />
        </Link>
      </div>
      <TransferMoneyCard />
      <div className={mount}>
        <input
          placeholder='مبلغ'
          className={inputStyle}
          onChange={(event) => setMountValue(event.target.value)}
        />
        {/* <span>مبلغ </span> */}
        {mountValue && <span>{Number(mountValue.replace(/,/g, '')).toLocaleString()} تومان</span>}
      </div>
      <button className={submitButtonStyle}>تایید و ادامه</button>
    </div>
  );
};

export default TransferMoney;
