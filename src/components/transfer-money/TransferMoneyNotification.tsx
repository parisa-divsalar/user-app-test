import { FC } from 'react';
import { CustomModal } from './CustomModal';
import { WarningIcon } from '../UI/Icons/transferMoney/WarningIcon';
import { Typography } from '@mui/material';
import CustomButton from '../UI/CustomButton';
import { useNavigate } from 'react-router-dom';
interface TransferMoneyNotificationProps {
  onClick: () => void;
}
export const TransferMoneyNotification: FC<TransferMoneyNotificationProps> = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <CustomModal onClick={onClick}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
        <WarningIcon />
        <Typography sx={{ textAlign: 'center', padding: '0 60px' }} color='text.primary'>
          برای انتقال از مبدا صندوق طلا باید ابتدا تعداد واحد طلای مورد نیاز خود را در صفحه معاملات،
          بفروشید.
        </Typography>
        <CustomButton
          onClick={() => navigate('/withdrawal-with-sheba-number')}
          color='info'
          fullWidth
        >
          معاملات
        </CustomButton>
      </div>
    </CustomModal>
  );
};
