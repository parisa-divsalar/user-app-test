import CustomButton from '@/components/UI/CustomButton';
import { useWithdrawalWithShebaNumber } from './useWithdrawalWithShebaNumberStyle';
import { useNavigate } from 'react-router-dom';
import CustomInput from '@/components/UI/CustomInput';
import {useState} from "react";
import {Typography} from "@mui/material";


const WithdrawalWithShebaNumber = () => {
    const [msisdnError, setMsisdnError] = useState(false);
    const [msisdn, setMsisdn] = useState<string>('');


    const navigate = useNavigate();
  const {  buttonStyle } = useWithdrawalWithShebaNumber();
  return (
    <div style={{ height: '97%', paddingBottom: '32px', position: 'relative' }}>
        <Typography variant='subtitle1' color='text.primary'>شماره شبا یا کارت مقصد را بنویسید</Typography>
      <CustomInput
          helperText={msisdnError ? 'شماره شبا وارد شده اشتباه است.' : ''}
          maxLength={msisdn.startsWith('0') ? 27: 27}
          placeholder='شماره کارت یا شبا'
          inputMode='numeric'

      />
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
