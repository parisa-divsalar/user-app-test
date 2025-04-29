import { Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import { useNavigate } from 'react-router-dom';
import useStyles from '@/pages/OnBoarding/useStyles.ts';
import { OnBoardingProps } from '@/type/common.ts';
import { PublicRoutes } from '@/config/routes.ts';
// @ts-ignore
import Slider from 'react-slick';
import { OnBoardingData } from '@/pages/OnBoarding/data.tsx';

const OnBoarding = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  let sliderRef: any = useRef(null);
  const [activeSlide, setActiveSlide] = useState(3);

  const settings = {
    centerMode: true,
    centerPadding: '0',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [],
    afterChange: function (index: number) {
      setActiveSlide(index);
    },
  };

  const onClickOpenAccount = () => {
    navigate(PublicRoutes.accountWizard);
  };

  useEffect(() => {
    sliderRef?.slickGoTo(activeSlide);
  }, [activeSlide]);

  return (
    <Stack className={classes.mainOnBoarding}>
      <Stack className={classes.content}>
        <Slider
          {...settings}
          ref={(slider: any) => {
            sliderRef = slider;
          }}
        >
          {OnBoardingData.map((intro: OnBoardingProps) => (
            <Stack width='100%' overflow='hidden' textAlign='center' key={intro.id} dir='rtl'>
              <img src={intro.img} className={classes.introImage} alt={intro.title} />
             
              <Typography variant='h6' color='text.primary' my={3} px={4}>
                {intro.title}
              </Typography>

              <Typography
                color='text.primary '
                lineHeight={1.7}
                letterSpacing='2px'
                textAlign='justify'
                variant='subtitle1'
                fontSize='1.4rem'
                fontWeight='500'
                px='2.5rem'
                mt={3}
              >
                {intro.description}
              </Typography>
            </Stack>
          ))}
        </Slider>
      </Stack>

      {activeSlide === 0 ? (
        <Stack direction='row' gap={2} px={2} className={classes.buttonContainer}>
          <CustomButton fullWidth color='secondary' onClick={() => navigate(PublicRoutes.login)}>
            حساب بنکس دارم
          </CustomButton>
          <CustomButton fullWidth onClick={onClickOpenAccount}>
            باز کردن حساب
          </CustomButton>
        </Stack>
      ) : (
        <Stack px={2} className={classes.buttonContainer}>
          <CustomButton fullWidth onClick={() => setActiveSlide(activeSlide - 1)}>
            بعدی
          </CustomButton>
        </Stack>
      )}
    </Stack>
  );
};

export default OnBoarding;
