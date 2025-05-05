import { LineCardIcon } from '../UI/Icons/transferMoney/LineCardIcon';
import { TransformMoneyCardIcon } from '../UI/Icons/transferMoney/TransformMoneyCardIcon';
import useStyles from './useStyles';
import { Stack, Typography } from '@mui/material';

export const TransferMoneyCard = () => {
  const { transferCardStyle, cardInfo, banksCardTitle, cardNo } = useStyles();
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
      <Stack
        direction='row'
        justifyContent='space-between'
        margin='5px 0'
        fontSize='14px'
        fontWeight='600'
      >
        <Typography color='text.primary' variant='subtitle2' component='span'>
          پول نقد
        </Typography>
        <Typography color='text.primary' variant='subtitle2' component='span'>
          ۵۸۸,۴۸۶,۳۵۰,۲۳۶ ت
        </Typography>
      </Stack>
    </div>
  );
};
