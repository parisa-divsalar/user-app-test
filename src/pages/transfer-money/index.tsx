import { EditIcon } from "@/components/UI/Icons/transferMoney/EditIcon";
import useStyles from "./useStyles";
import { TransferMoneyCard } from "@/components/transfer-money/TransferMoneyCard";

const TransferMoney = () => {
  const {transferMonyContainer,transferFrom,transferTitle,transferFromButton,submitButtonStyle,mount}=useStyles();
  return (
    <div className={transferMonyContainer}>
    <div className={transferFrom}>
      <h1 className={transferTitle}>انتقال از</h1>
      <button className={transferFromButton}>
      <EditIcon/>
      تغیر مبدا
      </button>
      </div>    
      <TransferMoneyCard/>
      <div className={mount}>
        <span>مبلغ </span>
        <span>۴۰,۰۰۰ تومان</span>
      </div>
   <button className={submitButtonStyle}>تایید و ادامه</button>
    </div>
  )
}

export default TransferMoney;