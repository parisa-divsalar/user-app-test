import { CircularProgress, Stack } from '@mui/material';
import { FunctionComponent } from 'react';

interface LoadingProps {
  fullHeight?: boolean;
}

const Loading: FunctionComponent<LoadingProps> = (props) => {
  const { fullHeight = false } = props;

  return (
    <Stack
      width='100%'
      height={fullHeight ? '90vh' : '100%'}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress size={26} />
    </Stack>
  );
};

export default Loading;
