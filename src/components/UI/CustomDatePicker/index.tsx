import { FunctionComponent, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CustomButton from '@/components/UI/CustomButton';
import { makeStyles } from '@mui/styles';
import DatePickerSliding from '@/components/UI/CustomDatePicker/DatePicker';
import { DateValueProps } from '@/type/common.ts';
import useStyles from './useStyles.ts';

const useMakeStyles = makeStyles(() => ({
  paper: {
    width: '100% !important',
    maxWidth: '32rem !important',
    margin: '0 auto !important',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
  },
}));

interface CustomDatePickerProps {
  title: string;
  date: DateValueProps | undefined;
  setDate: (date: DateValueProps | undefined) => void;
}

const CustomDatePicker: FunctionComponent<CustomDatePickerProps> = (props) => {
  const { title, date, setDate } = props;
  const classes = useStyles();
  const makeClasses = useMakeStyles();
  const [openCustomDatePicker, setOpenCustomDatePicker] = useState(false);

  const defaultDate = {
    year: '1370',
    month: '06',
    day: '10',
  };

  return (
    <>
      <Stack
        direction='row'
        className={classes.mainInputContainer}
        onClick={() => setOpenCustomDatePicker(true)}
      >
        <Typography color={date ? 'text.primary' : 'text.dark'} fontWeight='lighter'>
          {date ? `${date.year}/${date.month}/${date.day}` : `${title} `}
        </Typography>
      </Stack>

      <Drawer
        anchor='bottom'
        open={openCustomDatePicker}
        onClose={() => setOpenCustomDatePicker(false)}
        classes={{
          paper: makeClasses.paper,
        }}
      >
        <Stack direction='row' width='100%' justifyContent='space-between' px={2} pt={2}>
          <IconButton onClick={() => setOpenCustomDatePicker(false)}>
            <CloseRoundedIcon color='primary' />
          </IconButton>
          <Typography color='text.main' fontWeight='normal'>
            {`انتخاب ${title}`}
          </Typography>
        </Stack>

        <DatePickerSliding date={date || defaultDate} setDate={setDate} />

        <Stack p={2}>
          <CustomButton
            color='secondary'
            onClick={() => {
              setOpenCustomDatePicker(false);
              if (!date) setDate(defaultDate);
            }}
            text='تایید'
          />
        </Stack>
      </Drawer>
    </>
  );
};

export default CustomDatePicker;
