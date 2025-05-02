import { TRANSACTION } from '@/constants/transaction';
import useTransactionStyles from './useStyles';
import { TransactionFilterButton } from '@/components/transaction/TransactionFilterButton';
import { FilterIcon } from '@/components/UI/Icons/transaction/FilterIcon';
import { TransactionItem } from '@/components/transaction/TransactionItem';

const Transaction = () => {
  const { transActionContainer, diagram, filterGroup, transactionTitle } = useTransactionStyles();

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
    </div>
  );
};

export default Transaction;
