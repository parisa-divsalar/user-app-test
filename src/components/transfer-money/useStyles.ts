import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  transferCardStyle: {
    color: '#F5F9FC',
    fontFamily: 'Abar Mid',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '32px',
  },
  cardInfo: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0D446B',
    padding: '22px 11px',
    gap: '8px',
  },
  banksCardTitle: {
    color: ' #FDFDFD',
    textAlign: 'right',
    fontFamily: 'Abar Low',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.5px',
  },
  cardNo: {
    color: '#FDFDFD',
    textAlign: 'right',
    fontFamily: 'Abar Mid',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  inventory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8.5px 16px',
    backgroundColor: '#102243',
  },
  amountFontStyle: {
    color: '#F5F9FC',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
}));

export default useStyles;
