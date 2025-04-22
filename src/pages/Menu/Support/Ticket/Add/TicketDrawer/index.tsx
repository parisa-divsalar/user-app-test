import Drawer from '@mui/material/Drawer';
import { CardActionArea, IconButton, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import { AllTicketCategory } from '@/constants/common.ts';
import { SelectOption } from '@/type/common.ts';

const useStyles = makeStyles(() => ({
  paper: {
    width: '100% !important',
    maxWidth: '32rem !important',
    margin: '0 auto !important',
    borderTopLeftRadius: '1.5rem !important',
    borderTopRightRadius: '1.5rem !important',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    padding: '0 1.5rem',
  },

  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 0 0.5rem',
    borderBottom: '1px solid #1B008614',
    marginBottom: '0.5rem',
  },
  categoryContent: {
    width: '100%',
    marginTop: '0.75rem',
  },

  cardActionArea: {
    padding: '0.75rem 0.5rem !important',
    borderRadius: '0.75rem !important',
    display: 'flex !important',
    justifyContent: 'start !important',
    alignItems: 'center !important',
    margin: '0.5rem 0 !important',
    border: '1px solid #1B008614 !important',
  },
}));

interface CategoryDrawerProps {
  openTicketDrawer: boolean;
  closeDrawer: () => void;
  setTopicOfTicket: (ticket: SelectOption) => void;
}
const TicketDrawer: FunctionComponent<CategoryDrawerProps> = (props) => {
  const { openTicketDrawer, closeDrawer, setTopicOfTicket } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor='bottom'
      open={openTicketDrawer}
      onClose={closeDrawer}
      classes={{
        paper: classes.paper,
      }}
    >
      <Stack className={classes.content}>
        <Stack direction='row' className={classes.header}>
          <Typography color='text.primary' fontWeight='bold' variant='subtitle2'>
            انتخاب موضوع تیکت
          </Typography>
          <IconButton onClick={closeDrawer}>
            <CloseRoundedIcon color='primary' />
          </IconButton>
        </Stack>

        <Stack className={classes.categoryContent}>
          {AllTicketCategory.map((ticket: SelectOption) => (
            <CardActionArea
              className={classes.cardActionArea}
              key={ticket.name}
              onClick={() => {
                setTopicOfTicket(ticket);
                closeDrawer();
              }}
            >
              <Typography color='text.primary' fontWeight='normal' variant='subtitle2'>
                {ticket.name}
              </Typography>
            </CardActionArea>
          ))}
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default TicketDrawer;
