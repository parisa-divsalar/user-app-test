import { CardActionArea, Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded';
import { IInvest, OrderType } from '@/type/invest.ts';
import useStyles from '@/components/Card/Invest/useStyles.ts';
import { commafy } from '@/utils/commafyHelper.ts';
import {
  getStatusBgColor,
  getStatusTextColor,
  translateInvestStatus,
  translateInvestType,
} from '@/constants/translate.ts';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { Order } from '@/type/user-order';

interface InvestCardProps {
  invest: Order;
  setSelectInvest: (invest: Order) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
}

const InvestCard: FunctionComponent<InvestCardProps> = (props) => {
  const classes = useStyles();
  const { invest, setSelectInvest, setOpenDrawer } = props;
  const { 
    asset_id,
    asset_isin,
    available_budget,
    available_units,
    created_at,
    created_at_unix,
    final_price,final_volume,
    order_id,
    side,
    state 
  } = invest;
  const theme = useSelector(themeSelector);
const orderType=side==='buy';
  return (
    <CardActionArea
      className={classes.cardActionArea}
      onClick={() => {
        setSelectInvest(invest);
        setOpenDrawer(true);
      }}
    >
      <Stack className={classes.mainCard}>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' alignItems='center' gap={1}>
            <Stack
              className={classes.circleArrowContainer}
              bgcolor={
             orderType
                  ? theme === 'dark'
                    ? 'success.dark'
                    : 'success.light'
                  : theme === 'dark'
                    ? 'error.dark'
                    : 'error.light'
              }
            >
              {orderType ? (
                <ArrowUpwardRoundedIcon color='success' fontSize='small' />
              ) : (
                <ArrowDownwardRounded color='error' fontSize='small' />
              )}
            </Stack>
            <Typography variant='subtitle1' fontWeight='normal'>
              {'سفارش '}
              {side === 'buy' ? 'خرید ' : 'فروش '}
              {/* {translateInvestType(available_budget)} */}
            </Typography>
          </Stack>
          <Typography fontWeight='normal' variant='subtitle2'>
           {available_budget ? commafy(available_budget) : '-'} {'تومان'}       
               </Typography>
        </Stack>

        <Stack direction='row' justifyContent='space-between'>
          <Typography color='text.disable' variant='caption' mr={5} mt={1}>
            {created_at}
          </Typography>
         { available_units &&  <Typography color='text.primary' variant='subtitle2'>
            {available_units} {'واحد'}
          </Typography>}
        </Stack>

        <Stack width='100%' alignItems='end' mt={0.5}>
          {/* <Stack className={classes.statusContainer} bgcolor={getStatusBgColor(state, theme)}>
            <Typography variant='caption' color={getStatusTextColor(state)}>
              {translateInvestStatus(state)}
            </Typography>
          </Stack> */}
        </Stack>
      </Stack>
    </CardActionArea>
  );
};

export default InvestCard;
