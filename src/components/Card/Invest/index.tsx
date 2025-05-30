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

interface InvestCardProps {
  invest: IInvest;
  setSelectInvest: (invest: IInvest) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
}

const InvestCard: FunctionComponent<InvestCardProps> = (props) => {
  const classes = useStyles();
  const { invest, setSelectInvest, setOpenDrawer } = props;
  const { amount, investType, orderType, numberOfUnits, status, date } = invest;
  const theme = useSelector(themeSelector);

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
                orderType === OrderType.BUY
                  ? theme === 'dark'
                    ? 'success.dark'
                    : 'success.light'
                  : theme === 'dark'
                    ? 'error.dark'
                    : 'error.light'
              }
            >
              {orderType === OrderType.BUY ? (
                <ArrowUpwardRoundedIcon color='success' fontSize='small' />
              ) : (
                <ArrowDownwardRounded color='error' fontSize='small' />
              )}
            </Stack>
            <Typography variant='subtitle1' fontWeight='normal'>
              {'سفارش '}
              {orderType === OrderType.BUY ? 'خرید ' : 'فروش '}
              {translateInvestType(investType)}
            </Typography>
          </Stack>
          <Typography fontWeight='normal' variant='subtitle2'>
            {amount ? commafy(amount) : '-'} {'تومان'}
          </Typography>
        </Stack>

        <Stack direction='row' justifyContent='space-between'>
          <Typography color='text.disable' variant='caption' mr={5} mt={1}>
            {date}
          </Typography>
          <Typography color='text.primary' variant='subtitle2'>
            {numberOfUnits} {'واحد'}
          </Typography>
        </Stack>

        <Stack width='100%' alignItems='end' mt={0.5}>
          <Stack className={classes.statusContainer} bgcolor={getStatusBgColor(status, theme)}>
            <Typography variant='caption' color={getStatusTextColor(status)}>
              {translateInvestStatus(status)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </CardActionArea>
  );
};

export default InvestCard;
