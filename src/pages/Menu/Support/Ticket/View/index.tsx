import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { TicketType } from '@/type/ticket.ts';
import useStyles from '@/pages/Menu/Support/Ticket/View/useStyles.ts';

const ViewTicket = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const navigate = useNavigate();
  const ticket: TicketType = state?.ticket;
  const { subject = '', file = [], description = '' } = ticket || {};

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Stack className={classes.subTicket}>
          <Typography variant='subtitle1' fontWeight='bold' color='text.primary'>
            {subject}
          </Typography>
        </Stack>

        <Stack className={classes.desContainer} mt={2}>
          <Typography variant='subtitle2' fontWeight='bold' color='text.primary' lineHeight={2}>
            {description}
          </Typography>

          <Stack direction='row' className={classes.fileContainer}>
            {file &&
              file.length !== 0 &&
              file.map((f: any) => (
                <Stack key={f.id} direction='row' className={classes.badgeContainer} gap={0.75}>
                  <Typography color='primary.main' fontWeight='bold' variant='overline'>
                    {f.name}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>

        <Stack direction='row' className={classes.rowContainer} mt={2}>
          <Typography variant='caption' color='text.dark' className={classes.title}>
            پاسخ پشتیبانی
          </Typography>
          <Stack className={classes.dividerDashed} />
        </Stack>

        <Stack className={classes.desContainer} mt={2}>
          <Typography variant='subtitle2' fontWeight='bold' color='text.primary'>
            توضیحات ارائه شده تیم پشتیبانی برای تیکت لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی
            لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن
            ساختگی لورم ایپسوم متن ساختگی
          </Typography>
        </Stack>
      </Stack>

      <Stack className={classes.buttonContainer}>
        <CustomButton color='secondary' onClick={() => navigate(-1)}>
          بستن تیکت
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default ViewTicket;
