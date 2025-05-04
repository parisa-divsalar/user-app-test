import { LineCardIcon } from '../UI/Icons/transferMoney/LineCardIcon';
import { TransformMoneyCardIcon } from '../UI/Icons/transferMoney/TransformMoneyCardIcon';
import useStyles from './useStyles';

export const TransferMoneyCard = () => {
  const { transferCardStyle, cardInfo, banksCardTitle, cardNo, inventory, amountFontStyle } =
    useStyles();
  return (
    <div className={transferCardStyle}>
      <div className={cardInfo}>
        <TransformMoneyCardIcon />
        <div>
          <p className={banksCardTitle}>بنکس کارت</p>
          <p className={cardNo}>۴۰۴۷ ۳۲۲۰ ۳۴۳۳ ۴۳۹۲</p>
        </div>
        <LineCardIcon />
      </div>
      <div className={inventory}>
        <span className={amountFontStyle}>پول نقد</span>
        <p>۵۸۸,۴۸۶,۳۵۰,۲۳۶ ت</p>
      </div>
    </div>
  );
};
