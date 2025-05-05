import { makeStyles } from '@mui/styles';
import {Theme} from "@mui/material";


const useTransactionStyles = makeStyles((theme: Theme) => ({
  transActionContainer: {
    margin: '0 10px',

    '& > img': {
      width: '100%',

    },
  },
  diagram: {
    width: '100%',
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

  filterTransactionModelContainer: {
    backgroundColor: 'rgba(245, 249, 252, 0.3)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    zIndex: 100000,
  },
  filterTransactionModel: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 15px',
    gap: '8px',
    borderRadius: ' 20px 20px  0 0',
    backgroundColor: theme.palette.background.default,

    position: 'absolute',
    bottom: '0',
    zIndex: 100,
  },

  lineButton: {
    width: '100px',
    height: '4px',
    backgroundColor: '#758195',
  },
  filterTitle: {
    textAlign: 'center',
    textOverflow: 'ellipsis',
    fontFamily: '"Abar Mid"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  //  px-[8px] flex items-center justify-between py-[11px] border border-[#626F86] rounded-[12px]
  selectFilter: {
    padding: '11px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    borderRadius: '12px',
    border: '1px solid #626F86',
    width: '100%',
    overflow: 'hidden',
    color: theme.palette.text.primary,

    textOverflow: 'ellipsis',
    fontFamily: '"Abar Mid"',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
}));

export default useTransactionStyles;
