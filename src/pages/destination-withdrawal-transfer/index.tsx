import { DotsIcon } from '@/components/UI/Icons/transferMoney/DotsIcon';
import { useDestinationWithdrawalTransferStyle } from './useDestinationWithdrawalTransferStyle';
import { BankIcon } from '@/components/UI/Icons/transferMoney/BankIcon';
import { Typography } from '@mui/material';

const DestinationWithdrawalTransfer = () => {
  const { title, liStyle, submitButtonStyle, container } = useDestinationWithdrawalTransferStyle();
  return (
    <div className={container}>
      <p className={title}>مقصد خود را انتخاب کنید</p>
      <ul
        style={{
          margin: '0',
          padding: '0',
          height: 'calc(100% - 100px)',
          overflowY: 'auto',
        }}
      >
        {' '}
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
              <p
                style={{
                  margin: '0',
                  padding: '0',
                  color: ' #F5F9FC',
                  textAlign: 'right',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  opacity: '0.8',
                  marginTop: '5px',
                }}
              >
                ۶۲۱۹ ۸۳۴۵ ۳۴۵۳ ۳۴۵۶
              </p>
            </div>
            <DotsIcon />
          </li>
        ))}
      </ul>
      <button className={submitButtonStyle}>کارت جدید</button>
    </div>
  );
};

export default DestinationWithdrawalTransfer;
