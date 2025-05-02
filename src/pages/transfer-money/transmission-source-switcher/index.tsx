import { TransferMoneyCard } from '@/components/transfer-money/TransferMoneyCard';
import useStyles from '../useStyles';
import { AssetsList } from '@/components/transfer-money/AssetsList';

const TransmissionSourceSwitcher = () => {
  const { transmissionSourceSwitcherContainer, transmissionBackButton, container, titleText } =
    useStyles();
  return (
    <div className={transmissionSourceSwitcherContainer}>
      <button className={transmissionBackButton}>
        <span>انتقال</span>
      </button>
      <div className={container}>
        <h1 className={titleText}>تغییر مبدا انتقال</h1>
        <TransferMoneyCard />
        <AssetsList />
      </div>
    </div>
  );
};
export default TransmissionSourceSwitcher;
