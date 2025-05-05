import { ArrowDownIcon } from '../UI/Icons/transaction/ArrowDownIcon';
import useTransactionStyles from './useTransactionStyles';
import {Typography} from "@mui/material";

export const TransactionItem = () => {
  const { transactionItem, transactionIcon, date } = useTransactionStyles();
  return (
    <li className={transactionItem}>
      <span className={transactionIcon}>
        <ArrowDownIcon />
      </span>
      <div style={{ width: '100%' }}>
          <Typography color='text.primary' style={{ margin: '0', padding: '0' ,fontWeight:'bold'}}>واریز به حساب </Typography>
        <Typography color='text.primary' style={{fontSize:'12px'}} className={date}>سه‌شنبه، ۱۴ اردیبهشت ۱۴۰۲ &#x2022; ۲۲:۳۵</Typography>
      </div>
      <Typography color='text.primary' style={{ textWrap: 'nowrap', alignSelf: 'start' }}>۴۲۰,۰۰۰,۰۰۰ ت</Typography>
    </li>
  );
};
