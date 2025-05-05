import CustomButton from '@/components/UI/CustomButton';
import { useWithdrawalWithShebaNumber } from './useWithdrawalWithShebaNumberStyle';
import { useNavigate } from 'react-router-dom';
import CustomInput from '@/components/UI/CustomInput';
import {useState} from "react";
import {Typography} from "@mui/material";
import {msisdnValidation} from "@/utils/validation";


const WithdrawalWithShebaNumber = () => {
    const [msisdnError, setMsisdnError] = useState(false);
    const [msisdn, setMsisdn] = useState<string>('');


    const navigate = useNavigate();
  const {  buttonStyle } = useWithdrawalWithShebaNumber();
  return (
    <div style={{ height: '97%', paddingBottom: '32px', position: 'relative' }}>
        <Typography variant='subtitle1' color='text.primary'>شماره شبا یا کارت مقصد را بنویسید</Typography>
      <CustomInput
          maxLength={msisdn.startsWith('0') ? 27: 27}
          helperText={msisdnError ? 'شماره شبا وارد شده اشتباه است.' : ''}

          placeholder='شماره کارت یا شبا'
          inputMode='numeric'
          onChangeHandler={(value) => {
              setMsisdn(value);
              if (msisdnValidation(value) && value !== '') setMsisdnError(true);
              else setMsisdnError(false);
          }}

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
