import { FC } from 'react';
import { CustomModal } from './CustomModal';
import { Box,  Typography } from '@mui/material';
import { BankIcon } from '../UI/Icons/transferMoney/BankIcon';
import { ShareIcon } from '../UI/Icons/transferMoney/ShareIcon';
import { TrashIcon } from '../UI/Icons/transferMoney/TrashIcon';

interface DestinationWithdrawalTransferMoneyProps {
  onClick: () => void;
}

export const DestinationWithdrawalTransferMoneyModal: FC<
  DestinationWithdrawalTransferMoneyProps
> = ({ onClick }) => {
  return (
    <CustomModal onClick={onClick}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 8px',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: '#F5F9FC',
            textAlign: 'center',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
          color='text.primary'
        >
          مقصد
        </Typography>
        <BankIcon />
        <Typography color='text.secondary' variant='subtitle2'>
          مینا حیدرزاده مینابی
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          ۶۲۱۹ ۸۳۴۵ ۳۴۵۳ ۳۴۵۶
        </Typography>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#626F86' }}></Box>
        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <button
            style={{
              width: '100%',
              height: '44px',
              padding: '8px 6px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
              borderRadius: '10px',
              background: '#F5F9FC',
              border: 'none',
              outline: 'none',
              color: ' #12284C',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            <ShareIcon />
            <span>اشتراک گذاری</span>
          </button>
          <button
            style={{
              display: 'flex',
              width: '100%',
              height: '44px',
              padding: '8px 6px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
              borderRadius: '10px',
              border: '1px solid #EF4444',
              color: '#EF4444',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              background: 'transparent',
            }}
          >
            <TrashIcon />
            <span>اشتراک گذاری</span>
          </button>
        </div>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#626F86' }}></Box>
        <button
        onClick={onClick}
          style={{
            display: 'flex',
            width: '100%',
            padding: '8px 16px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '20px ',
            background: ' #172B4D',
           border:'1px solid #1B76A8',
            outline:'none',
            color:'#1B76A8'
          }}
        >
          انصراف
        </button>
      </Box>
    </CustomModal>
  );
};
