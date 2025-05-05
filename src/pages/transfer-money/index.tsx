import { EditIcon } from '@/components/UI/Icons/transferMoney/EditIcon';
import useStyles from './useStyles';
import { TransferMoneyCard } from '@/components/transfer-money/TransferMoneyCard';
import { useState } from 'react';
import { Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import { ChangOriginModal } from '@/components/transfer-money/ChangOriginModal';
import { TransferMoneyNotification } from '@/components/transfer-money/TransferMoneyNotification';
const TransferMoney = () => {
  const {
    transferMonyContainer,
    transferFrom,
    transferFromButton,
    submitButtonStyle,
    mount,
    inputStyle,
  } = useStyles();
  const [mountValue, setMountValue] = useState('');
  const [openChangeOriginModal, setOpenChangeOriginModal] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const handleOpenModal = () => setOpenChangeOriginModal(false);

  const handleShowNotification = () => setShowNotification(false);
  return (
    <div className={transferMonyContainer}>
      <div className={transferFrom}>
        <Typography variant='subtitle2' color='text.primary'>
          انتقال از
        </Typography>
        <CustomButton
          variant='text'
          onClick={() => setOpenChangeOriginModal(true)}
          className={transferFromButton}
        >
          <EditIcon />
        </CustomButton>
      </div>
      <TransferMoneyCard />
      <div className={mount}>
        <input
          placeholder='مبلغ'
          className={inputStyle}
          onChange={(event) => setMountValue(event.target.value)}
        />
        {mountValue && <span>{Number(mountValue.replace(/,/g, '')).toLocaleString()} تومان</span>}
      </div>
      <div className={submitButtonStyle}>
        <CustomButton onClick={() => setShowNotification(true)} color='secondary' fullWidth>
          تایید و ادامه
        </CustomButton>
      </div>
      {openChangeOriginModal && <ChangOriginModal handleOpenModal={handleOpenModal} />}
      {showNotification && <TransferMoneyNotification onClick={handleShowNotification} />}
    </div>
  );
};

export default TransferMoney;
