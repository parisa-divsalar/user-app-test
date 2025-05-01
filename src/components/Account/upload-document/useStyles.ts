import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
 uploadDocumentCard:{
    width:'100%',
    rounded:'0.75rem',
    height:'200px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px',
    color:'#FDFDFD',
    fontWeight:'600',
    fontSize:'16px',
    backgroundColor:'#44546F',
    borderRadius:'12px',
    overflow:'hidden'
 },
 uploadDocumentCardIcon:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'60px',
    height:'60px',
    backgroundColor:'#0B2F43',
    borderRadius:'100%'

 },
 uploadDocumentBtn:{
    width:'36px',
    height:'36px',
    borderRadius:'100%',
    backgroundColor:'#44546F',
    cursor:'pointer',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    outline:'none',
    border:'none'
 }
}));

export default useStyles;
