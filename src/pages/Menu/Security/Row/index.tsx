import { CardActionArea, Stack, Typography } from '@mui/material';
import ArrowSvg from '@/components/UI/Icons/Arrow';
import useStyles from '@/pages/Menu/Security/useStyles.ts';
import { FunctionComponent } from 'react';

interface SecurityRowProps {
  icon: any;
  title: string;
  onClick?: () => void;
}
const SecurityRow: FunctionComponent<SecurityRowProps> = (props) => {
  const { title, icon, onClick } = props;
  const classes = useStyles();

  return (
    <CardActionArea className={classes.cardActionArea} onClick={() => onClick?.()}>
      <Stack direction='row' className={classes.menuItem}>
        <Stack direction='row'>
          {icon}
          <Typography color='text.primary' mr={1} variant='subtitle2'>
            {title}
          </Typography>
        </Stack>
        <ArrowSvg />
      </Stack>
    </CardActionArea>
  );
};

export default SecurityRow;
