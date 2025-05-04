import { makeStyles } from '@mui/styles';

const useTransactionStyles = makeStyles(() => ({
  transActionContainer: {
    margin: '0 10px',
  },
  diagram: {
    width: '100%',
    minWidth: '320px',
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

  filterTransactionModelContainer:{
backgroundColor: 'rgba(245, 249, 252, 0.3)',
  position:'absolute',
  width:'100%',
  height:'100%',
  inset:0,
  zIndex:100000,

  },
  filterTransactionModel:{
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:'center',
  padding:'10px 56px',
  gap: "16px",
  borderRadius: " 20px 20px  0 0",
  backgroundColor: "#172B4D",
  position:'absolute',
  bottom:'0',
  zIndex:100,
 },

 lineButton:{
width:'100px',
height:'4px',
backgroundColor:'#758195'
 },
 filterTitle:{
    color: "#F5F9FC",
  textAlign: "center",
  textOverflow: "ellipsis",
  fontFamily: '"Abar Mid"',
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal"
 }

}));

export default useTransactionStyles;
