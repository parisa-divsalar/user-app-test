import CustomButton from '@/components/UI/CustomButton';
import { useWithdrawalWithShebaNumber } from './useWithdrawalWithShebaNumberStyle';
import { useNavigate } from 'react-router-dom';

const WithdrawalWithShebaNumber = () => {
  const navigate = useNavigate();
  const { title, inputStyle, buttonStyle } = useWithdrawalWithShebaNumber();
  return (
    <div style={{ height: '97%', paddingBottom: '32px', position: 'relative' }}>
      <p className={title}>شماره شبا یا کارت مقصد را بنویسید</p>
      <input placeholder='شماره کارت یا شبا' className={inputStyle} />
      <div className={buttonStyle}>
        <CustomButton
          color='info'
          fullWidth
          onClick={() => navigate('/destination-withdrawal-transfer')}
        >
          تایید و ادامه
        </CustomButton>
      </div>
    </div>
  );
};

export default WithdrawalWithShebaNumber;
