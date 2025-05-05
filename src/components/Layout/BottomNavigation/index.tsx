import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Theme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { PrivateRoutes } from '@/config/routes.ts';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import HomeSvg from '@/components/UI/Icons/Home';
import DepositSvg from '@/components/UI/Icons/Deposit';
import WalletSvg from '@/components/UI/Icons/Wallet';
import ProfileSvg from '@/components/UI/Icons/Profile';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: '100% !important',
    height: '80px !important',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    boxShadow: `0px -4px 4px 0px ${theme.palette.mode === 'dark' ? '#0D446B' : '#0D446B1A'}`,

    '@media(max-width: 32rem)': {
      borderRadius: '0',
    },

    '@media(max-width: 479px)': {
      height: '60px !important',
    },
  },
  root: {
    color: '#5a6980 !important',
  },
  selected: {
    marginTop: '0.2rem !important',
    fontSize: '0.75rem !important',
    color: theme.palette.text.primary,
  },
}));

const BottomTabNavigation = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useSelector(themeSelector);
  const [value, setValue] = useState(pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log({ event });
    setValue(newValue);
  };

  const getSvgColor = (route: string) => {
    if (theme === 'dark') {
      if (value === route) return '#F5F9FC';
      else return '#5a6980';
    } else {
      if (value === route) return '#0D446B';
      else return '#b1c2cb';
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      classes={{ root: classes.paper }}
    >
      <BottomNavigationAction
        classes={{ root: classes.root, selected: classes.selected }}
        value={PrivateRoutes.dashboard}
        label='خانه'
        onClick={() => navigate(PrivateRoutes.dashboard)}
        icon={<HomeSvg color={getSvgColor(PrivateRoutes.dashboard)} />}
      />

      {/**/}
      <BottomNavigationAction
        href='/deposit'
        classes={{ root: classes.root, selected: classes.selected }}
        label='واریز'
        icon={<DepositSvg color={getSvgColor('/deposit')} />}
      />

      <BottomNavigationAction
        classes={{ root: classes.root, selected: classes.selected }}
        label='سرمایه'
        onClick={() => navigate(PrivateRoutes.transmissionSourceSwitcher)}
        icon={<WalletSvg color={getSvgColor('/wallet')} />}
      />

      <BottomNavigationAction
        classes={{ root: classes.root, selected: classes.selected }}
        onClick={() => navigate(PrivateRoutes.menu)}
        value={PrivateRoutes.menu}
        label='پروفایل'
        icon={<ProfileSvg color={getSvgColor(PrivateRoutes.menu)} />}
      />
    </BottomNavigation>
  );
};

export default BottomTabNavigation;
