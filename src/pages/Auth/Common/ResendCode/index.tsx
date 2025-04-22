import { FunctionComponent, memo, useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';

interface ResendCodeProps {
  sendOtp: () => void;
}

const ResendCode: FunctionComponent<ResendCodeProps> = (props) => {
  const { sendOtp } = props;
  const [counter, setCounter] = useState(120);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (active) {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [active]);

  useEffect(() => {
    if (counter === 0) {
      setActive(false);
    }
  }, [counter]);

  const onClickResendCode = async () => {
    sendOtp();
    setActive(true);
    setCounter(120);
  };

  return (
    <Stack direction='row' justifyContent='space-between' width='100%' mt={2} pl={1}>
      <Typography variant='subtitle2' color='text.dark'>
        {` ${counter > 60 ? '01' : '00'}:${counter > 60 ? counter - 60 : counter === 0 ? '00' : counter}  `}
      </Typography>

      <Typography
        variant='subtitle2'
        fontWeight='bold'
        color='text.primary'
        onClick={() => counter === 0 && onClickResendCode()}
        sx={{
          opacity: counter === 0 ? '1' : '0.4',
          cursor: counter === 0 ? 'pointer' : 'not-allowed',
        }}
      >
        ارسال مجدد
      </Typography>
    </Stack>
  );
};

export default memo(ResendCode);
