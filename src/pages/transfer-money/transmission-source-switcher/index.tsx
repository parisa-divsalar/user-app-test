import { TransferMoneyCard } from '@/components/transfer-money/TransferMoneyCard';
import useStyles from '../useStyles';
import { AssetsList } from '@/components/transfer-money/AssetsList';

const TransmissionSourceSwitcher = () => {
  const { transmissionSourceSwitcherContainer, container } = useStyles();
  return (
    <div className={transmissionSourceSwitcherContainer}>
      <div className={container}>
        <TransferMoneyCard />
        <AssetsList />
      </div>
    </div>
  );
};
export default TransmissionSourceSwitcher;
