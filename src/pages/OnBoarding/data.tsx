import { OnBoardingProps } from '@/type/common.ts';
import s1 from '@/assets/images/onboarding/s1.png';
import s2 from '@/assets/images/onboarding/s2.png';
import s3 from '@/assets/images/onboarding/s3.png';
import s4 from '@/assets/images/onboarding/s4.png';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import { Typography } from '@mui/material';

export const OnBoardingData: OnBoardingProps[] = [
  {
    id: generateFakeUUIDv4(),
    slideNumber: 1,
    title: (
      <Typography color='text.primary' variant='h6' fontWeight='normal'>
        به{' '}
        <Typography component='span' variant='h6' fontWeight='bold'>
          بنکس
        </Typography>{' '}
        خوش آمدید!
      </Typography>
    ),
    description:
      'بنکس یک پلتفرم نوآورانه است که به شما این امکان را می‌دهد تا دارایی‌های خود را در یک بانک موبایلی تحت مدیریت خودتان نگه دارید. شما می‌توانید از سیستم‌های امنیتی و فناوری‌های پیشرفته برای مدیریت و انتقال دارایی‌ها استفاده کنید.',
    img: s1,
  },
  {
    id: generateFakeUUIDv4(),
    slideNumber: 2,
    title: (
      <Typography color='text.primary' variant='h6' fontWeight='normal'>
        همزمان{' '}
        <Typography component='span' variant='h6' fontWeight='bold'>
          پس‌انداز و سرمایه‌گذاری
        </Typography>{' '}
        کنید!
      </Typography>
    ),
    description:
      'بنکس یک پلتفرم نوآورانه است که به شما این امکان را می‌دهد تا دارایی‌های خود را در یک بانک موبایلی تحت مدیریت خودتان نگه دارید. شما می‌توانید از سیستم‌های امنیتی و فناوری‌های پیشرفته برای مدیریت و انتقال دارایی‌ها استفاده کنید.',
    img: s2,
  },
  {
    id: generateFakeUUIDv4(),
    slideNumber: 4,
    title: (
      <Typography color='text.primary' variant='h6' fontWeight='bold'>
        بنکس، بانک نیست.
      </Typography>
    ),
    description:
      'بنکس یک پلتفرم نوآورانه است که به شما این امکان را می‌دهد تا دارایی‌های خود را در یک بانک موبایلی تحت مدیریت خودتان نگه دارید. شما می‌توانید از سیستم‌های امنیتی و فناوری‌های پیشرفته برای مدیریت و انتقال دارایی‌ها استفاده کنید.',
    img: s4,
  },
  {
    id: generateFakeUUIDv4(),
    slideNumber: 3,
    title: (
      <Typography color='text.primary' variant='h6' fontWeight='normal'>
        از{' '}
        <Typography component='span' variant='h6' fontWeight='bold'>
          امن‌ترین
        </Typography>{' '}
        خدمات بانکی استفاده کنید!
      </Typography>
    ),
    description:
      'بنکس یک پلتفرم نوآورانه است که به شما این امکان را می‌دهد تا دارایی‌های خود را در یک بانک موبایلی تحت مدیریت خودتان نگه دارید. شما می‌توانید از سیستم‌های امنیتی و فناوری‌های پیشرفته برای مدیریت و انتقال دارایی‌ها استفاده کنید.',
    img: s3,
  },
];
