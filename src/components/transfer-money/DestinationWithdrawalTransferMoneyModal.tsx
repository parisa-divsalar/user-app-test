import { FC } from 'react';
import { CustomModal } from './CustomModal';
import { Box,  Typography } from '@mui/material';
import { BankIcon } from '../UI/Icons/transferMoney/BankIcon';
import { ShareIcon } from '../UI/Icons/transferMoney/ShareIcon';
import { TrashIcon } from '../UI/Icons/transferMoney/TrashIcon';
import CustomButton from "@/components/UI/CustomButton";

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
        <Typography color='text.secondary' variant='subtitle1'>
          مینا حیدرزاده مینابی
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          ۶۲۱۹ ۸۳۴۵ ۳۴۵۳ ۳۴۵۶
        </Typography>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(98,111,134,0.38)' }}></Box>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', marginTop:'3px' }}>

            <CustomButton color='secondary' fullWidth startIcon={ <ShareIcon />} variant='contained'>
                اشتراک گذاری
            </CustomButton>
                <CustomButton color='error' fullWidth startIcon={ <TrashIcon />} variant='outlined'>
                   حذف اشتراک گذاری
                </CustomButton>
        </div>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(98,111,134,0.38)' }}></Box>
          <CustomButton color='secondary' fullWidth  variant='outlined'>
          انصراف
          </CustomButton>
      </Box>
    </CustomModal>
  );
};
