import { ArrowDownIcon } from '../UI/Icons/transaction/ArrowDownIcon';
import useTransactionStyles from './useTransactionStyles';

export const TransactionItem = () => {
  const { transactionItem, transactionIcon, date } = useTransactionStyles();
  return (
    <li className={transactionItem}>
      <span className={transactionIcon}>
        <ArrowDownIcon />
      </span>
      <div style={{ width: '100%' }}>
        <p style={{ margin: '0', padding: '0' }}>برداشت کارمزد</p>
        <p className={date}>سه‌شنبه، ۱۴ اردیبهشت ۱۴۰۲  &#x2022;   ۲۲:۳۵</p>
      </div>
      <span style={{ textWrap: 'nowrap', alignSelf: 'start' }}>۴۲۰,۰۰۰,۰۰۰ ت</span>
    </li>
  );
};
