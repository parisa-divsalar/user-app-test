import { makeStyles } from '@mui/styles';

const useTransactionStyles = makeStyles(() => ({
  TransactionFilterButton: {
    width: '100%',
    padding: '8px 6px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2px',
    borderRadius: '10px',
    border: '1px solid  #758195',
    color: ' #758195',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  transactionItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    color: ' #F5F9FC',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    padding: '16px 0',
    borderBottom: '1px solid #626F86',
    listStyleType: 'none',
  },
  transactionIcon: {
    width: '48px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34D39940',
    borderRadius: '100%',
  },
  date: {
    color: ' #F5F9FC',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    opacity: 0.8,
    margin: '4px 0 0 0',
    padding: ' 0',
  },
}));

export default useTransactionStyles;
