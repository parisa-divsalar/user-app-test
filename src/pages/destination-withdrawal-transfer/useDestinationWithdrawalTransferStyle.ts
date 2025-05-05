import { makeStyles } from '@mui/styles';
import {Theme} from "@mui/material";

export const useDestinationWithdrawalTransferStyle = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    height: '96%',
    padding: '0 8px',
    backgroundColor: theme.palette.background.default,

  },
  title: {
    color: ' #F5F9FC',
    textAlign: 'right',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.5px',
  },
  liStyle: {
    display: 'flex',
    padding: '16px 0',
    gap: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 10px 0px rgba(13, 68, 107, 0.10)',
    marginTop: '10px',
    paddingLeft:'30px'
  },
  submitButtonStyle: {
    width: '100%',
    padding: '8px 6px',
    borderRadius: '10px',
    backgroundColor: '#F5F9FC',
    color: ' #12284C',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    cursor: 'pointer',
  },
}));
