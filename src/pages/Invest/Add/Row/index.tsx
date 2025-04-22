import { Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { commafy } from '@/utils/commafyHelper.ts';

interface DevicesCardProps {
  label: string;
  value: string;
  unit?: string;
}

const RowNAV: FunctionComponent<DevicesCardProps> = (props) => {
  const { label, value, unit } = props;

  return (
    <Stack direction='row' justifyContent='space-between' my={1}>
      <Typography color='text.primary' variant='subtitle2' fontWeight='normal'>
        {label}
      </Typography>

      <Typography color='text.primary' variant='subtitle2' fontWeight='normal'>
        {unit === 'تومان' ? commafy(value) : value} {unit}
      </Typography>
    </Stack>
  );
};

export default RowNAV;
