import { FunctionComponent } from 'react';
import { CardActionArea, Stack, Typography } from '@mui/material';

import { TicketType } from '@/type/ticket.ts';
import useStyles from '@/components/Card/Ticket/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';
import ArrowSvg from '@/components/UI/Icons/Arrow';

interface TicketCardProps {
  ticket: TicketType;
}

const TicketCard: FunctionComponent<TicketCardProps> = (props) => {
  const navigate = useNavigate();
  const { ticket } = props;
  const { subject, status, date, priority } = ticket;
  const classes = useStyles({ status });

  return (
    <CardActionArea
      className={classes.cardActionArea}
      onClick={() => navigate(PrivateRoutes.viewTicket, { state: { ticket } })}
    >
      <Stack direction='row' className={classes.mainCard}>
        <Stack direction='row' gap={1} width='100%'>
          <Stack width='100%'>
            <Typography color='text.primary' fontWeight='bold' variant='subtitle2'>
              {subject}
            </Typography>

            <Typography mt={0.5} color='text.secondary' fontWeight='normal' variant='caption'>
              {date}
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems='end' gap={1}>
          <ArrowSvg />

          <Stack direction='row' gap={1}>
            <Stack
              className={classes.statusBox}
              bgcolor={
                priority === 'HIGH'
                  ? 'error.light'
                  : priority === 'MEDIUM'
                    ? 'warning.light'
                    : 'success.light'
              }
            >
              <Typography
                color={
                  priority === 'HIGH'
                    ? 'error.main'
                    : priority === 'MEDIUM'
                      ? 'warning.main'
                      : 'success.main'
                }
                variant='caption'
                noWrap
              >
                {priority === 'LOW' ? 'کم' : priority === 'MEDIUM' ? 'متوسط' : 'زیاد'}
              </Typography>
            </Stack>

            <Stack
              className={classes.statusBox}
              bgcolor={
                status === 'ANSWERED'
                  ? 'success.light'
                  : status === 'WAITING_FOR_ANSWER'
                    ? 'warning.light'
                    : '#B3B9C4'
              }
            >
              <Typography
                color={
                  status === 'ANSWERED'
                    ? 'success.main'
                    : status === 'WAITING_FOR_ANSWER'
                      ? 'warning.main'
                      : 'text.primary'
                }
                variant='caption'
                noWrap
              >
                {status === 'ANSWERED'
                  ? 'پاسخ داده شده'
                  : status === 'WAITING_FOR_ANSWER'
                    ? 'در انتظار پاسخ'
                    : 'بسته شده'}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardActionArea>
  );
};

export default TicketCard;
