import { Typography } from '@mui/material';
import { AssetItem } from './AssetItem';
import { ASSETS_LIST_MOCK_DATA } from './AssetsList';
import { CustomModal } from './CustomModal';
import { TransferMoneyCard } from './TransferMoneyCard';

export const ChangOriginModal = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
  return (
    <CustomModal onClick={handleOpenModal}>
      <Typography variant='subtitle1' color='text.primary'>
        تغییر مبدا برداشت
      </Typography>
      <TransferMoneyCard />
      <ul
        style={{
          width: '100%',
          display: 'grid',
          gap: '10px',
          margin: 0,
          padding: 0,
          gridTemplateColumns: 'repeat(2,1fr)',
        }}
      >
        {ASSETS_LIST_MOCK_DATA.map((item) => (
          <AssetItem key={item.id} {...item} />
        ))}
      </ul>
    </CustomModal>
  );
};
