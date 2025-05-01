import { Routes, Route } from 'react-router-dom';
import {
  SplashScreen,
  OnBoarding,
  Login,
  LoginWithOTP,
  OTP,
  AccountWizard,
  AccountRegister,
  AccountDocuments,
  AccountAuthentication,
  AccountResult,
} from '@/pages';
import { PublicRoutes } from '@/config/routes.ts';
import UploadDocument from '@/pages/Account/upload-document';

const PublicRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<SplashScreen />} />
      <Route path={PublicRoutes.onboarding} element={<OnBoarding />} />
      <Route path={PublicRoutes.login} element={<Login />} />
      <Route path={PublicRoutes.loginWithOTP} element={<LoginWithOTP />} />
      <Route path={PublicRoutes.otp} element={<OTP />} />
      <Route path={PublicRoutes.accountWizard} element={<AccountWizard />} />
      <Route path={PublicRoutes.accountRegister} element={<AccountRegister />} />
      <Route path={PublicRoutes.accountDocuments} element={<AccountDocuments />} />
      <Route path={PublicRoutes.accountAuthentication} element={<AccountAuthentication />} />
      <Route path={PublicRoutes.accountResult} element={<AccountResult />} />
      <Route path={PublicRoutes.uploadDocument} element={<UploadDocument/>} />
    </Routes>
  );
};

export default PublicRoute;
