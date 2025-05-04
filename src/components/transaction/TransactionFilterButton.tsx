import useTransactionStyles from './useTransactionStyles';
export const TransactionFilterButton = ({ title,onClick }:{title:string,onClick:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { TransactionFilterButton } = useTransactionStyles();
  return <button className={TransactionFilterButton} onClick={()=>onClick(true)}>{title}</button>;
};
