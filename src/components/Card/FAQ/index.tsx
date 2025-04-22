import { FunctionComponent } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FQAType } from '@/type/common.ts';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '0.5rem auto',
    width: '100% !important',
    backgroundColor: `${theme.palette.mode === 'dark' ? '#182a4e' : '#f8f8f4'} !important`,
    borderBottom: '1px solid #DCDFE4',
    boxShadow: 'none !important',

    '&::before': {
      backgroundColor: 'white !important',
    },
  },

  accordionSummary: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

interface FAQCardProps {
  faq: FQAType;
  selectedFaqId: string | undefined;
  setSelectedFaqId: (selectedFaqId: string | undefined) => void;
}

const FAQCard: FunctionComponent<FAQCardProps> = (props) => {
  const classes = useStyles();
  const { faq, selectedFaqId, setSelectedFaqId } = props;
  const { question, answer, id } = faq;

  return (
    <Accordion
      classes={{ root: classes.root }}
      expanded={selectedFaqId === id}
      onChange={() => setSelectedFaqId(selectedFaqId === id ? undefined : id)}
    >
      <AccordionSummary aria-controls='panel1-content' id='panel1-header'>
        <Stack direction='row' className={classes.accordionSummary}>
          <Typography color='text.primary' fontWeight='bold' variant='subtitle2'>
            {question}
          </Typography>
          <IconButton>
            {selectedFaqId === id ? (
              <ExpandLessRoundedIcon color='secondary' />
            ) : (
              <ExpandMoreRoundedIcon color='secondary' />
            )}
          </IconButton>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant='subtitle2' color='text.primary' fontWeight='lighter'>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQCard;
