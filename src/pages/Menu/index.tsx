import { CardActionArea, FormControlLabel, Stack, Typography } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { MenuListItems } from '@/pages/Menu/data.tsx';
import { MenuListItemType } from '@/type/common.ts';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '@/store/user/userSelecor.ts';

import useStyles from '@/pages/Menu/useStyles.ts';
import IOSSwitch from '@/components/UI/IOSSwitch';
import { setTheme } from '@/store/common/commonSlice.ts';
import { themeSelector } from '@/store/common/commonSelector.ts';
import ArrowSvg from '@/components/UI/Icons/Arrow';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';
import exit from "@/assets/images/icon/exit.svg";
import ExitDrawer from "@/pages/Menu/Security/ExitDrawer";
import {useState} from "react";

const MenuPage = () => {
  const classes = useStyles();
  const profile = useSelector(profileSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const [openExitDrawer, setOpenExitDrawer] = useState<boolean>(false);


  const { name = '-- ', mobile = '0912345678' } = profile || {};

  console.log('profile:', profile);

  const onClickMenuItem = (code: string) => {
    switch (code) {
      case 'PROFILE':
        navigate(PrivateRoutes.profile);
        break;
      case 'SEJAM':
        navigate(PrivateRoutes.nationalCodeSejam);
        break;
      case 'SECURITY':
        navigate(PrivateRoutes.security);
        break;
      case 'SUPPORT':
        navigate(PrivateRoutes.support);
        break;
      default:
        break;
    }
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <Stack className={classes.avatarContainer}>
          <PersonRoundedIcon fontSize='large' />
        </Stack>

        <Stack mt={1} textAlign='center'>
          <Typography color='text.primary' fontWeight='bold' variant='subtitle1'>
            {name}
          </Typography>
          <Typography variant='subtitle2' color='text.dark' fontWeight='normal' mt={0.2} dir='ltr'>
            {mobile}
          </Typography>
        </Stack>

        {MenuListItems.map((menuItem: MenuListItemType) => (
          <CardActionArea
            className={classes.cardActionArea}
            key={menuItem.id}
            onClick={() => onClickMenuItem(menuItem.code)}
          >
            <Stack
              direction='row'
              className={classes.menuItem}
              sx={{ borderBottom: menuItem.code === 'SUPPORT' ? 'none' : '1px solid #DCDFE4' }}
            >
              <Stack direction='row'>
                {menuItem.icon && menuItem.icon}
                <Typography color='text.primary' mr={1} variant='subtitle2' fontWeight='bold'>
                  {menuItem.title}
                </Typography>
              </Stack>

              <ArrowSvg />
            </Stack>

          </CardActionArea>
        ))}
        <CardActionArea className={classes.cardActionArea} onClick={() => setOpenExitDrawer(true)}>
          <Stack direction='row' className={classes.menuItem}>
            <Stack direction='row'>
              <img src={exit} alt='' />
              <Typography color='error.main' mr={1} variant='subtitle2'>
                حذف تنظیمات و خروج
              </Typography>
            </Stack>
            <ArrowSvg color='#EF4444' />
          </Stack>
        </CardActionArea>

        <ExitDrawer openExitDrawer={openExitDrawer} closeDrawer={() => setOpenExitDrawer(false)} />
      </Stack>

      <Stack direction='row' width='100%' justifyContent='space-between' p={2}>
        <Typography color='text.primary' fontWeight='bold'>
          {theme === 'dark' ? 'تم دارک' : 'تم روشن'}
        </Typography>

        <FormControlLabel
          control={
            <IOSSwitch
              sx={{ m: 1 }}
              checked={theme === 'dark'}
              onChange={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
            />
          }
          label=''
        />
      </Stack>
    </Stack>
  );
};

export default MenuPage;
