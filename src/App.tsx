import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { isAuthenticatedSelector, useIdSelector } from '@/store/user/userSelecor.ts';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import PublicRoute from '@/config/publicRoute.tsx';
import PrivateRoute from '@/config/privateRoute.tsx';
import { privateRouteList, PublicRoutes, publicRouteList, PrivateRoutes } from '@/config/routes.ts';
import { getUserById } from '@/apis/user.ts';
import { setProfile } from '@/store/user/userSlice.ts';

const App = () => {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthenticatedSelector);
  const userId = useSelector(useIdSelector);
  const [loading] = useState<boolean>(false);

  const getProfileDate = () => getUserById(userId).then((res: any) => dispatch(setProfile(res)));

  useEffect(() => {
    // @ts-ignore
    scrollRef.current?.scrollIntoView?.({ behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    if (isAuth) getProfileDate();
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth && privateRouteList.includes(pathname))
      navigate(PublicRoutes.onboarding, { replace: true });

    if (isAuth && publicRouteList.includes(pathname) && pathname !== PublicRoutes.otp)
      navigate(PrivateRoutes.dashboard, { replace: true });
  }, [isAuth, pathname]);

  if (loading) return <Loading fullHeight />;

  return (
    <>
      <div ref={scrollRef} />

      <Layout>{isAuth ? <PrivateRoute /> : <PublicRoute />}</Layout>
    </>
  );
};

export default App;
