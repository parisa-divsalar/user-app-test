import { Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import useStyles from '@/pages/Menu/Sejam/useStyles.ts';
import { UserProfileSejamType } from '@/type/user.ts';
import { typeMappingHandler } from '@/constants/keysMapping.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import ConfirmSejamDrawer from '@/pages/Menu/Sejam/Confirm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';

const SejamInfo = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const userInfo: UserProfileSejamType = {
    firstName: 'علیرضا',
    lastName: 'محمدی',
    fatherName: 'محمد',
    birthDate: '۱۳۷۷/۱۱/۱۰',
    city: 'تهران',
    nationalCode: '2781565032',
    ssn: '55328',
    phoneNumber: '09123456789',
    email: 'baranakbari1990@gmail.com',
  };

  const onSubmit = () => {
    setOpenDrawer(true);
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Typography mt={1} color='text.primary' variant='subtitle2' fontWeight='bold'>
          کاربرگرامی ، در صورت مغایرت در اطلاعات سجام از طریق سامانه سجام اقدام کنید.
        </Typography>

        <Stack className={classes.userInfoBox}>
          {Object.entries(userInfo).map(([key, value]) => (
            <Typography
              key={generateFakeUUIDv4()}
              variant='subtitle2'
              my={0.75}
              color='text.primary'
            >
              {typeMappingHandler(key).message}:
              <Typography component='span' fontWeight='bold' variant='subtitle1'>
                &nbsp;{value}
              </Typography>
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack gap={2}>
        <CustomButton fullWidth color='secondary' onClick={onSubmit}>
          تایید اطلاعات سجام
        </CustomButton>
        <CustomButton
          fullWidth
          variant='text'
          color='secondary'
          onClick={() => navigate(PrivateRoutes.menu, { replace: true })}
        >
          انصراف
        </CustomButton>
      </Stack>

      <ConfirmSejamDrawer openDrawer={openDrawer} closeDrawer={() => setOpenDrawer(false)} />
    </Stack>
  );
};

export default SejamInfo;
