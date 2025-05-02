import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
 uploadedImageContainer:{
    marginTop:'19px'
 },
  uploadedFileFont:{
    fontSize:'14px',
    color:'#fff',
    fontWeight:'50,0',
    margin:'0'
  },
  uploadedFileImagesStyle:{
   borderRadius:'12px',
   width:'100%',
   height:'100%',
   maxHeight:'180px',
   margin:'10px 0',
   overflow:'hidden'
  }
}
));

export default useStyles;
