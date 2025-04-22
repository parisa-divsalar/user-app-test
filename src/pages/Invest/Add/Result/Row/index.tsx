import { Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { commafy } from '@/utils/commafyHelper.ts';

interface DevicesCardProps {
  label: string;
  value: any;
  unit?: string;
}

const InvestInfoRow: FunctionComponent<DevicesCardProps> = (props) => {
  const { label, value, unit } = props;

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      my={1}
      width='100%'
      paddingBottom={1}
      borderBottom='1px solid #DCDFE4'
    >
      <Typography color='text.primary' variant='subtitle2' fontWeight='normal'>
        {label}
      </Typography>

      <Typography color='text.primary' variant='subtitle2' fontWeight='bold'>
        {unit === 'تومان' ? commafy(value) : value} {unit}
      </Typography>
    </Stack>
  );
};

export default InvestInfoRow;
