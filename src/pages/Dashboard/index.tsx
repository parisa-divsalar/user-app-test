import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import useStyles from '@/pages/Dashboard/useStyles.ts';
import { useSelector } from 'react-redux';
import bgChartDark from '@/assets/images/bg/bg-chart-dark.svg';
import bgChartLight from '@/assets/images/bg/bg-chart-light.svg';

import { themeSelector } from '@/store/common/commonSelector.ts';
import ServiceCard from '@/components/Card/Service';
import { ServiceList } from '@/pages/Dashboard/data.ts';
import { ServicesType } from '@/type/common.ts';
import BannerContainer from '@/pages/Dashboard/Banner';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useSelector(themeSelector);

  return (
    <Stack className={classes.mainDashboard}>
      <img src={theme === 'dark' ? bgChartDark : bgChartLight} alt='' />

      <Grid container spacing={2} width='100%' px={2} mt={1}>
        {ServiceList.slice(0, 4).map((service: ServicesType) => (
          <Grid key={service.id} size={{ xs: 3 }}>
            <ServiceCard service={service} onClick={(href: string) => navigate(href)} />
          </Grid>
        ))}
      </Grid>

      <Stack className={classes.bannerContainer}>
        <BannerContainer />
      </Stack>

      <Typography textAlign='right' px={2} variant='subtitle1' mb={1}>
        خدمات بنکس
      </Typography>

      <Grid container spacing={2} width='100%' px={2} mt={1}>
        {ServiceList.slice(4, 8).map((service: ServicesType) => (
          <Grid key={service.id} size={{ xs: 3 }}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Dashboard;
