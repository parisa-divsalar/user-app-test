import * as React from 'react';
import { Box } from '@mui/material';
import useStyles from '@/components/Layout/useStyles.ts';
import AppBar from '@/components/Layout/AppBar';
import { useLocation } from 'react-router-dom';
import { neverShowAppBar, showBottomNavigation, widthLayoutRoutes } from '@/config/routes.ts';
import BottomTabNavigation from '@/components/Layout/BottomNavigation';
import useWindowSize from '@/hooks/useWindowSize.ts';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const innerHeight = useWindowSize();
  const widthLayout = widthLayoutRoutes.includes(pathname);
  const classes = useStyles({ widthLayout, innerHeight });

  return (
    <main className={classes.mainLayout}>
      <Box className={classes.layoutContainer}>
        {!neverShowAppBar.includes(pathname) && <AppBar />}

        <Box className={classes.childrenContent}>{children}</Box>

        {showBottomNavigation.includes(pathname) && <BottomTabNavigation />}
      </Box>
    </main>
  );
};

export default Layout;
