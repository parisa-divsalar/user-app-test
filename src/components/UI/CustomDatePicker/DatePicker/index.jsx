import { Stack } from '@mui/material';
import Picker from 'react-scrollable-picker';
import { optionDateGroups } from '@/components/UI/CustomDatePicker/DatePicker/data.js';

const DatePickerSliding = ({ date, setDate }) => {
  const handleChange = (name, value) => {
    setDate({
      ...date,
      [name]: value,
    });
  };

  return (
    <Stack px={3}>
      <Picker
        optionGroups={optionDateGroups}
        valueGroups={date}
        onChange={handleChange}
        itemHeight={50}
      />
    </Stack>
  );
};

export default DatePickerSliding;
