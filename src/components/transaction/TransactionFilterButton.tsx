import { FC } from 'react';
import useTransactionStyles from './useTransactionStyles';
import { TransActionType } from '@/type/transaction-type';
export const TransactionFilterButton: FC<TransActionType> = ({ title }) => {
  const { TransactionFilterButton } = useTransactionStyles();
  return <button className={TransactionFilterButton}>{title}</button>;
};
