import { IconButton, Stack, Typography } from '@mui/material';
import { typeMappingHandler } from '@/constants/keysMapping.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowSvg from '@/components/UI/Icons/Arrow';
import useStyles from '@/components/Layout/AppBar/useStyles.ts';

const AppBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  return (
    <Stack width='100%' className={classes.mainAppbar}>
      <Stack direction='row' className={classes.appbar}>
        <IconButton onClick={() => navigate(-1)} className={classes.backImage}>
          <ArrowSvg />
        </IconButton>

        <Typography variant='subtitle1' color='text.primary' fontWeight='bold' mr={1}>
          {typeMappingHandler(pathname + search).message}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AppBar;
