import { Link } from "react-router-dom";
import { useWithdrawalWithShebaNumber } from "./useWithdrawalWithShebaNumberStyle"

const WithdrawalWithShebaNumber = () => {
    const {title,inputStyle,buttonStyle}=useWithdrawalWithShebaNumber();
  return (
    <div style={{height:'97%',paddingBottom:'32px',position:'relative'}}>
        <p className={title}>شماره شبا یا کارت مقصد را بنویسید</p>
        <input placeholder="شماره کارت یا شبا" className={inputStyle}/>
        <Link to='/destinationWithdrawalTransfer' className={buttonStyle}>تایید و ادامه</Link>
    </div>
  )
}

export default WithdrawalWithShebaNumber