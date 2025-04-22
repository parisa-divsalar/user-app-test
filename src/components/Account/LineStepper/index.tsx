import { Stack } from '@mui/material';
import useStyles from '@/components/Account/LineStepper/useStyles.ts';
import { FunctionComponent } from 'react';

interface LineStepperProps {
  step: number;
}

const LineStepper: FunctionComponent<LineStepperProps> = (props) => {
  const classes = useStyles();
  const { step = 1 } = props;

  return (
    <Stack direction='row' className={classes.mainStep}>
      <Stack
        bgcolor={step >= 1 ? 'background.activeStep' : 'background.step'}
        className={classes.step}
      />
      <Stack
        bgcolor={step >= 2 ? 'background.activeStep' : 'background.step'}
        className={classes.step}
      />
      <Stack
        bgcolor={step >= 3 ? 'background.activeStep' : 'background.step'}
        className={classes.step}
      />
      <Stack
        bgcolor={step >= 4 ? 'background.activeStep' : 'background.step'}
        className={classes.step}
      />
      <Stack
        bgcolor={step >= 5 ? 'background.activeStep' : 'background.step'}
        className={classes.step}
      />
    </Stack>
  );
};

export default LineStepper;
