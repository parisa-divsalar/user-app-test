import { EditIcon } from '@/components/UI/Icons/transferMoney/EditIcon';
import useStyles from './useStyles';
import { TransferMoneyCard } from '@/components/transfer-money/TransferMoneyCard';
import { useState } from 'react';
import { Typography } from '@mui/material';
import CustomInput from '@/components/UI/CustomInput';
import CustomButton from '@/components/UI/CustomButton';
import { ChangOriginModal } from '@/components/transfer-money/ChangOriginModal';
import { TransferMoneyNotification } from '@/components/transfer-money/TransferMoneyNotification';

const TransferMoney = () => {
  const {
    transferMonyContainer,
    transferFrom,
    transferFromButton,
    submitButtonStyle,
  } = useStyles();

  const [openChangeOriginModal, setOpenChangeOriginModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);



  const handleOpenModal = () => setOpenChangeOriginModal(false);

  const handleShowNotification = () => setShowNotification(false);

  return (
    <div className={transferMonyContainer}>
      <div className={transferFrom}>
        <Typography variant='subtitle1' color='text.primary'>
          برداشت از
        </Typography>
        <CustomButton
          variant="text"
          onClick={() => setOpenChangeOriginModal(true)}
          className={transferFromButton}
        >
          <EditIcon />
        </CustomButton>
      </div>
      <TransferMoneyCard />
      {/*<div className={mount}>*/}
        <CustomInput
          placeholder='مبلغ'
          inputMode="numeric"
        />
      {/*  {mountValue && <span>{Number(mountValue.replace(/,/g, '')).toLocaleString()} تومان</span>}*/}
      {/*</div>*/}
      <div className={submitButtonStyle}>
        <CustomButton
          onClick={() => setShowNotification(true)}
          color="secondary"
          fullWidth
        >
          تایید و ادامه
        </CustomButton>
      </div>

      {openChangeOriginModal && <ChangOriginModal handleOpenModal={handleOpenModal} />}
      {showNotification && <TransferMoneyNotification onClick={handleShowNotification} />}
    </div>
  );
};

export default TransferMoney;