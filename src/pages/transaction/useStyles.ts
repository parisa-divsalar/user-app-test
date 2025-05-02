import { makeStyles } from '@mui/styles';

const useTransactionStyles = makeStyles(() => ({
  transActionContainer: {
    margin: '0 10px',
  },
  diagram: {
    width: '100%',
    minWidth: '361px',
    maxHeight: '520px',
    objectFit: 'cover',
  },
  filterGroup: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '11px',
  },
  transactionTitle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    margin: '20px 0 24px 0',
    color: ' #F5F9FC',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
}));

export default useTransactionStyles;
