import { Stack } from '@mui/material';
import { TicketData } from '@/pages/Menu/Support/Ticket/data.tsx';
import TicketCard from '@/components/Card/Ticket';
import { TicketType } from '@/type/ticket.ts';
import CustomButton from '@/components/UI/CustomButton';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';
import useStyles from '@/pages/Menu/Support/Ticket/useStyles.ts';

const Ticket = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        {TicketData.map((ticket: TicketType) => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </Stack>

      <Stack className={classes.buttonContainer}>
        <CustomButton color='secondary' onClick={() => navigate(PrivateRoutes.addTicket)}>
          ثبت تیکت جدید
        </CustomButton>
      </Stack>
    </Stack>
  );
};

export default Ticket;
