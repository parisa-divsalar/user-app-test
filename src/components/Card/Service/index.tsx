import { FunctionComponent } from 'react';
import { CardActionArea, Stack, Typography } from '@mui/material';

import useStyles from '@/components/Card/Service/useStyles.ts';
import { ServicesType } from '@/type/common.ts';

interface TicketCardProps {
  service: ServicesType;
  onClick?: (href: string) => void;
}

const ServiceCard: FunctionComponent<TicketCardProps> = (props) => {
  const { service, onClick } = props;
  const { title, icon, href } = service;
  const classes = useStyles();

  return (
    <Stack className={classes.mainCard}>
      <CardActionArea className={classes.cardActionArea} onClick={() => href && onClick?.(href)}>
        <img src={icon} alt={title} width='25px' height='25px' />
      </CardActionArea>

      <Typography color='text.primary' variant='subtitle2' mt={1.5} fontWeight='bold'>
        {title}
      </Typography>
    </Stack>
  );
};

export default ServiceCard;
