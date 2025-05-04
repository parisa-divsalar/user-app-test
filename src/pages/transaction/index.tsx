import { TRANSACTION } from '@/constants/transaction';
import useTransactionStyles from './useStyles';
import { TransactionFilterButton } from '@/components/transaction/TransactionFilterButton';
import { FilterIcon } from '@/components/UI/Icons/transaction/FilterIcon';
import { TransactionItem } from '@/components/transaction/TransactionItem';
import { DropDown } from '@/components/transaction/DropDown';
import { FlashDownIcon } from '@/components/UI/Icons/transferMoney/FlashDownIcon';
import { TimeIcon } from '@/components/UI/Icons/transferMoney/TimeIcon';

const Transaction = () => {
  const { transActionContainer, diagram, filterGroup,filterTitle,selectFilter ,transactionTitle,filterTransactionModelContainer,filterTransactionModel ,lineButton} = useTransactionStyles();

  return (
    <div className={transActionContainer}>
      <img className={diagram} alt='diagram' src='/diagram.svg' />
      <div className={filterGroup}>
        {TRANSACTION.map((item) => (
          <TransactionFilterButton key={item.id} {...item} />
        ))}
      </div>
      <div className={transactionTitle}>
        <p style={{ width: '100%', margin: '0' }}>لیست تراکنش ها</p>
        <FilterIcon />
        <span>فیلترها</span>
      </div>
      <ul style={{ margin: '0', padding: '0' }}>
        {Array.from({ length: 20 }, (i: number, _) => (
          <TransactionItem key={i} />
        ))}
      </ul>
      <div className={filterTransactionModelContainer}>
     <div className={filterTransactionModel}>
      <span className={lineButton}></span>
      <span className={filterTitle}>فیلتر</span>
       <DropDown icon={<FlashDownIcon/>} title='نوع معامله'/>
       <DropDown icon={<TimeIcon/>} title='تاریخ'/>
        <DropDown icon={<FlashDownIcon/>} title='نوع تراکنش'/>

      </div>
      </div>
 
    </div>
  );
};

export default Transaction;
