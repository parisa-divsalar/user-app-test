export const PublicRoutes = {
  onboarding: '/onboarding',
  login: '/auth/login',
  loginWithOTP: '/auth/login-with-otp',
  otp: '/auth/otp',
  accountWizard: '/account/wizard',
  accountRegister: '/account/register',
  accountDocuments: '/account/documents',
  accountAuthentication: '/account/authentication',
  accountResult: '/account/result',
};

export const PrivateRoutes = {
  dashboard: '/dashboard',
  menu: '/menu',
  profile: '/profile',
  nationalCodeSejam: '/sejam/nationalCode',
  otpSejam: '/sejam/otp',
  sejamInfo: '/sejam/info',
  security: '/security',
  changeUserName: '/security/change/user-name',
  changePassword: '/security/change/password',
  changeMobile: '/security/change/mobile',
  otpChangeMobile: '/security/change/mobile/otp',
  devices: '/security/devices',
  support: '/support',
  faq: '/faq',
  ticket: '/ticket',
  viewTicket: '/ticket/view',
  addTicket: '/ticket/add',
  invest: '/invest',
  addInvest: '/invest/add',
  contract: '/contract',
};

export const publicRouteList = Object.values(PublicRoutes);

export const privateRouteList = Object.values(PrivateRoutes);

export const neverShowAppBar = [
  '/',
  PublicRoutes.login,
  PublicRoutes.onboarding,
  PrivateRoutes.dashboard,
  PrivateRoutes.menu,
  PublicRoutes.accountResult,
];

export const showBottomNavigation = [PrivateRoutes.dashboard, PrivateRoutes.menu];

export const widthLayoutRoutes = [
  '/',
  PublicRoutes.onboarding,
  PrivateRoutes.dashboard,
  PublicRoutes.login,
  PrivateRoutes.menu,
];
