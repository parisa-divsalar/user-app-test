import { DotsIcon } from '@/components/UI/Icons/transferMoney/DotsIcon';
import { useDestinationWithdrawalTransferStyle } from './useDestinationWithdrawalTransferStyle';
import { BankIcon } from '@/components/UI/Icons/transferMoney/BankIcon';
import { Typography } from '@mui/material';
import { DestinationWithdrawalTransferMoneyModal } from '@/components/transfer-money/DestinationWithdrawalTransferMoneyModal';
import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import cart1 from '@/assets/images/bg/more_vert.png';


const DestinationWithdrawalTransfer = () => {
  const { title, liStyle, container } = useDestinationWithdrawalTransferStyle();
  const [showDestinationModal, setShowDestinationModal] = useState<boolean>(false);
  const handleHiddenModal = () => setShowDestinationModal(false);
  return (
    <>
      <div className={container}>
          <Typography variant='subtitle2' color='text.primary'>روش برداشت دلخواه خود را انتخاب کنید</Typography>
        <ul
          style={{
            margin: '0',
            padding: '0',
            height: 'calc(100% - 100px)',
            overflowY: 'auto',
          }}
        >
          {Array.from({ length: 5 }, (_, value) => (
            <li className={liStyle} key={value}>
              <BankIcon />
              <div style={{ width: '100%' }}>
                <Typography
                  color='text.primary'
                  sx={{
                    textAlign: 'right',
                    fontFamily: '"Abar Low"',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    letterSpacing: '-0.5px',
                    margin: '0',
                    padding: '0',
                  }}
                >
                  فرزاد بخشی زاده
                </Typography>
                <Typography
                  sx={{
                    margin: '0',
                    padding: '0',
                    textAlign: 'right',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    opacity: '0.8',
                    marginTop: '5px',
                  }}
                  color='text.primary'
                >
                  ۶۲۱۹ ۸۳۴۵ ۳۴۵۳ ۳۴۵۶
                </Typography>
              </div>
              {/*<DotsIcon  style={{color:'text.primary'}} />*/}
                <img src={cart1}/>
            </li>
          ))}
        </ul>
        <CustomButton
          fullWidth
          variant='contained'
          color='info'
          onClick={() => setShowDestinationModal(true)}
        >
          کارت جدید
        </CustomButton>
      </div>
      {showDestinationModal && (
        <DestinationWithdrawalTransferMoneyModal onClick={handleHiddenModal} />
      )}
    </>
  );
};

export default DestinationWithdrawalTransfer;
