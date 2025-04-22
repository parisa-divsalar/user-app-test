import { Stack } from '@mui/material';
import Slider from 'react-slick';
import { BannerData } from '@/constants/common.ts';
import '@/assets/styles/slick-theme.css';
import '@/assets/styles/slick.css';

import useStyles from '@/pages/Dashboard/Banner/useStyles.js';

const BannerContainer = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '30px',
    centerMode: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          centerPadding: '25px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {BannerData.map((item) => (
        <Stack className={classes.mainContainer} key={item.id}>
          <img src={item.bgBanner} alt='' width='100%' />
        </Stack>
      ))}
    </Slider>
  );
};

export default BannerContainer;
