import { TRANSACTION } from '@/constants/transaction';
import useTransactionStyles from './useStyles';
import { TransactionFilterButton } from '@/components/transaction/TransactionFilterButton';
import { FilterIcon } from '@/components/UI/Icons/transaction/FilterIcon';
import { TransactionItem } from '@/components/transaction/TransactionItem';
import { DropDown } from '@/components/transaction/DropDown';
import { FlashDownIcon } from '@/components/UI/Icons/transferMoney/FlashDownIcon';
import { TimeIcon } from '@/components/UI/Icons/transferMoney/TimeIcon';
import { useState } from 'react';

const Transaction = () => {
  const {
    transActionContainer,
    diagram,
    filterGroup,
    filterTitle,
    transactionTitle,
    filterTransactionModelContainer,
    filterTransactionModel,
    lineButton,
  } = useTransactionStyles();
  const [showFilterModal,setShowFilterModal]=useState(false);

  return (
    <div className={transActionContainer}>
      <img className={diagram} alt='diagram' src='/diagram.svg' />
      <div className={filterGroup}>
        {TRANSACTION.map((item) => (
          <TransactionFilterButton key={item.id} onClick={setShowFilterModal} {...item} />
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
      {showFilterModal && <div className={filterTransactionModelContainer} onClick={()=>setShowFilterModal(false)}>
        <div className={filterTransactionModel} onClick={(event)=>event.stopPropagation()}>
          <span className={lineButton}></span>
          <span className={filterTitle}>فیلتر</span>
          <DropDown icon={<FlashDownIcon />} title='نوع معامله' />
          <DropDown icon={<TimeIcon />} title='تاریخ' />
          <DropDown icon={<FlashDownIcon />} title='نوع تراکنش' />
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px',width:'100%' }}>
            <button
              style={{
                display: 'flex',
                height: '36px',
                padding: '8px 6px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
                flex: '1 0 0',
                border: 'none',
                outline: 'none',
                borderRadius: '10px',
                cursor:'pointer'
              }}
            >
              فیلتر
            </button>
            <button
            onClick={()=>setShowFilterModal(false)}
              style={{
                width:'100%',
                display: 'flex',
                height: '36px',
                padding: '8px 6px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
                flex: '1 0 0',
                border: 'none',
                outline: 'none',
                borderRadius: '10px',
                cursor:'pointer'
              }}
            >
انصراف         
   </button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Transaction;
