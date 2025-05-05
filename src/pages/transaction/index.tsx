import { TRANSACTION } from '@/constants/transaction';
import useTransactionStyles from './useStyles';
import { TransactionFilterButton } from '@/components/transaction/TransactionFilterButton';
import { FilterIcon } from '@/components/UI/Icons/transaction/FilterIcon';
import { TransactionItem } from '@/components/transaction/TransactionItem';
import { DropDown } from '@/components/transaction/DropDown';
import { FlashDownIcon } from '@/components/UI/Icons/transferMoney/FlashDownIcon';
import { TimeIcon } from '@/components/UI/Icons/transferMoney/TimeIcon';
import { useState } from 'react';
import CustomButton from "@/components/UI/CustomButton";
import {Typography} from "@mui/material";
import bgChartDark from '@/assets/images/bg/bg-chart-dark.svg';
import bgChartLight from '@/assets/images/bg/bg-chart-light.svg';
import {useSelector} from "react-redux";
import {themeSelector} from "@/store/common/commonSelector";
const Transaction = () => {
    const theme = useSelector(themeSelector);

    const {
    transActionContainer,
    filterGroup,
    filterTitle,
    transactionTitle,
    filterTransactionModelContainer,
    filterTransactionModel,
    lineButton,
  } = useTransactionStyles();
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <div className={transActionContainer}>
        <img src={theme === 'dark' ? bgChartDark : bgChartLight} alt='' />
      <div className={filterGroup}>
        {TRANSACTION.map((item) => (
          <TransactionFilterButton key={item.id} onClick={setShowFilterModal} {...item} />
        ))}
      </div>
      <div className={transactionTitle}>
        <p style={{ width: '100%', margin: '0' }}>لیست تراکنش ها</p>
        <FilterIcon />
        <Typography variant={"subtitle1"} color='text.primary'>فیلترها</Typography>
      </div>
      <ul style={{ margin: '0', padding: '0' }}>
        {Array.from({ length: 20 }, (i: number, _) => (
          <TransactionItem key={i} />
        ))}
      </ul>
      {showFilterModal && (
        <div className={filterTransactionModelContainer} onClick={() => setShowFilterModal(false)}>
          <div className={filterTransactionModel} onClick={(event) => event.stopPropagation()}>
            <span className={lineButton}></span>
            <span className={filterTitle}>فیلتر</span>
            <DropDown icon={<FlashDownIcon />} style={{color:'text.primary'}} title='نوع معامله' />
            <DropDown icon={<TimeIcon />} title='تاریخ' />
            <DropDown icon={<FlashDownIcon />} title='نوع تراکنش' />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', marginTop:'3px' }}>
              <CustomButton color='secondary'
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
                  cursor: 'pointer',
                }}
              >
                فیلتر
              </CustomButton>

                <CustomButton  color='secondary'   variant='outlined'
                onClick={() => setShowFilterModal(false)}
                style={{
                  width: '100%',
                  display: 'flex',
                  height: '36px',
                  padding: '8px 6px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2px',
                  flex: '1 0 0',

                  cursor: 'pointer',
                }}
              >
                انصراف
                </CustomButton>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
