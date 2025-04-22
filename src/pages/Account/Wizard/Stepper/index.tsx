import { Stack, Typography } from '@mui/material';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import addAccount from '@/assets/images/icon/add-account.svg';

import whiteDoc from '@/assets/images/icon/white-doc.svg';
import doc from '@/assets/images/icon/doc.svg';

import whiteVerified from '@/assets/images/icon/white-verified.svg';
import verified from '@/assets/images/icon/verified.svg';

import whiteCheck from '@/assets/images/icon/white-check.svg';
import check from '@/assets/images/icon/check.svg';

import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import { FunctionComponent } from 'react';
import { AccountWizardData } from '@/pages/Account/Wizard/data.ts';
import { AccountWizardType } from '@/type/account.ts';
import useStyles from '@/pages/Account/Wizard/Stepper/useStyles.ts';

interface AccountStepperProps {
  activeStep: number;
}

const AccountStepper: FunctionComponent<AccountStepperProps> = (props) => {
  const { activeStep } = props;
  const classes = useStyles();

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      right: 'calc(-50% + 2px)',
      left: 'calc(50% + 2px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#939D2D',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#939D2D',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#bac06b',
      borderTopWidth: 2,
      borderRadius: 1,
      ...theme.applyStyles('dark', {
        borderColor: theme.palette.grey[800],
      }),
    },
  }));

  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
      color: '#939D2D',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[700],
    }),
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          color: '#939D2D',
        },
      },
    ],
  }));

  const getStepIcon = (index: number) => {
    switch (index) {
      case 2:
        return activeStep + 1 >= 2 ? whiteDoc : doc;
      case 3:
        return activeStep + 1 >= 3 ? whiteVerified : verified;
      case 4:
        return activeStep + 1 >= 4 ? whiteCheck : check;
      default:
        return addAccount;
    }
  };

  function QontoStepIcon(props: StepIconProps) {
    const { active, className, icon } = props;

    const index: number = typeof icon === 'number' ? icon : 1;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className} sx={{ cursor: 'pointer' }}>
        <Stack
          className={classes.stepIcon}
          bgcolor={activeStep + 1 >= index ? 'primary.main' : 'primary.light'}
        >
          <img src={getStepIcon(index)} alt='' />
        </Stack>
      </QontoStepIconRoot>
    );
  }

  return (
    <Stack className={classes.mainContainer}>
      <Stepper
        activeStep={activeStep}
        connector={<QontoConnector />}
        orientation='vertical'
        sx={{
          '& .MuiStepConnector-line': {
            borderRight: '1px solid #939D2D',
            borderLeft: '0 !important',
            marginRight: '1.65rem !important',
          },
        }}
      >
        {AccountWizardData.map((wizard: AccountWizardType) => (
          <Step key={wizard.id}>
            <StepLabel
              classes={{ root: classes.stepLabelRoot }}
              sx={{
                '& .MuiStepIcon-root': {
                  width: '1.5rem',
                  height: '1.5rem',
                },
                '& .MuiStepLabel-label': {
                  textAlign: 'right',
                },
              }}
              StepIconComponent={QontoStepIcon}
            >
              <Typography
                color='text.primary'
                variant='subtitle1'
                fontWeight='bold'
                sx={{ opacity: activeStep >= wizard.step ? '1' : '0.4' }}
              >
                {wizard.label}
              </Typography>
              <Typography
                color='text.dark'
                variant='subtitle2'
                sx={{ opacity: activeStep >= wizard.step ? '1' : '0.4' }}
              >
                {wizard.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default AccountStepper;
