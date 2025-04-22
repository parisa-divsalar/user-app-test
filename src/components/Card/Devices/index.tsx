import { Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import exit from '@/assets/images/icon/exit.svg';
import { DevicesType } from '@/type/devices.ts';
import useStyles from '@/components/Card/Devices/useStyles.ts';

interface DevicesCardProps {
  devices: DevicesType;
}

const DevicesCard: FunctionComponent<DevicesCardProps> = (props) => {
  const classes = useStyles();
  const { devices } = props;
  const { title, buildNumber, icon, model } = devices;

  return (
    <Stack className={classes.mainCard}>
      <Typography color='text.primary' variant='subtitle1' mt={1}>
        {title}
      </Typography>

      <Stack direction='row' gap={1.5} justifyContent='end' alignItems='center'>
        <Typography color='secondary.main' variant='subtitle2' fontWeight='bold' mt={0.5}>
          {model}
        </Typography>
        <img src={icon} alt='' width='34px' />
      </Stack>

      <Typography
        color='text.primary'
        variant='subtitle2'
        fontWeight='bold'
        mt={1}
        textAlign='left'
      >
        {buildNumber}
      </Typography>

      <Stack direction='row' className={classes.exitActionArea}>
        <img src={exit} alt='' width='24px' />
        <Typography color='error.main' variant='subtitle2'>
          خروج از دستگاه
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DevicesCard;
