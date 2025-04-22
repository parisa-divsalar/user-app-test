import { Stack } from '@mui/material';
import useStyles from '@/components/Account/ImageContainer/useStyles.ts';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ImageContainer = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.circleBox}>
        <AddRoundedIcon fontSize='large' />
      </Stack>
    </Stack>
  );
};

export default ImageContainer;
