import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  SplashScreen,
  MenuPage,
  Profile,
  NationalCodeSejam,
  OTPSejam,
  SejamInfo,
  Security,
  ChangeUserName,
  ChangePassword,
  ChangeMobileNumber,
  OTPChangeMobile,
  Devices,
  Support,
  FAQ,
  Ticket,
  AddTicket,
  ViewTicket,
  Invest,
  AddInvest,
} from '@/pages';
import { PrivateRoutes } from '@/config/routes.ts';
import TransferMoney from '@/pages/transfer-money';
import TransmissionSourceSwitcher from '@/pages/transfer-money/transmission-source-switcher';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<SplashScreen />} />
      <Route path={PrivateRoutes.dashboard} element={<Dashboard />} />
      <Route path={PrivateRoutes.menu} element={<MenuPage />} />
      <Route path={PrivateRoutes.profile} element={<Profile />} />
      <Route path={PrivateRoutes.nationalCodeSejam} element={<NationalCodeSejam />} />
      <Route path={PrivateRoutes.otpSejam} element={<OTPSejam />} />
      <Route path={PrivateRoutes.sejamInfo} element={<SejamInfo />} />
      <Route path={PrivateRoutes.security} element={<Security />} />
      <Route path={PrivateRoutes.changeUserName} element={<ChangeUserName />} />
      <Route path={PrivateRoutes.changePassword} element={<ChangePassword />} />
      <Route path={PrivateRoutes.changeMobile} element={<ChangeMobileNumber />} />
      <Route path={PrivateRoutes.otpChangeMobile} element={<OTPChangeMobile />} />
      <Route path={PrivateRoutes.devices} element={<Devices />} />
      <Route path={PrivateRoutes.support} element={<Support />} />
      <Route path={PrivateRoutes.faq} element={<FAQ />} />
      <Route path={PrivateRoutes.ticket} element={<Ticket />} />
      <Route path={PrivateRoutes.addTicket} element={<AddTicket />} />
      <Route path={PrivateRoutes.viewTicket} element={<ViewTicket />} />
      <Route path={PrivateRoutes.invest} element={<Invest />} />
      <Route path={PrivateRoutes.addInvest} element={<AddInvest />} />
      <Route path={PrivateRoutes.transferMoney} element={<TransferMoney />} />
      <Route
        path={PrivateRoutes.transmissionSourceSwitcher}
        element={<TransmissionSourceSwitcher />}
      />
    </Routes>
  );
};

export default PrivateRoute;
