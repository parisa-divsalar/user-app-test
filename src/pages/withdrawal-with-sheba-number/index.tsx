import { useWithdrawalWithShebaNumber } from "./useWithdrawalWithShebaNumberStyle"

const WithdrawalWithShebaNumber = () => {
    const {title,inputStyle,buttonStyle}=useWithdrawalWithShebaNumber()
  return (
    <div style={{height:'97%',paddingBottom:'32px',position:'relative'}}>
        <p className={title}>شماره شبا یا کارت مقصد را بنویسید</p>
        <input placeholder="شماره کارت یا شبا" className={inputStyle}/>
        <button className={buttonStyle}>تایید و ادامه</button>
    </div>
  )
}

export default WithdrawalWithShebaNumber