const helperMapping: any = {
  firstName: {
    message: 'نام',
  },
  lastName: {
    message: 'نام خانوادگی',
  },
  fatherName: {
    message: 'نام پدر',
  },
  birthDate: {
    message: 'تاریخ تولد',
  },
  city: {
    message: 'محل تولد',
  },
  nationalCode: {
    message: 'کد ملی',
  },
  ssn: {
    message: 'شماره شناسنامه',
  },
  phoneNumber: {
    message: 'شماره موبایل',
  },
  email: {
    message: 'ایمیل',
  },
  '/auth/login': {
    message: 'ورود به بنکس',
  },
  '/auth/login-with-otp': {
    message: 'ورود از طریق OTP',
  },
  '/auth/otp': {
    message: 'ورود کد تایید',
  },
  '/account/wizard': {
    message: 'افتتاح آنلاین حساب',
  },
  '/account/register': {
    message: 'ساخت حساب کاربری',
  },
  '/account/documents': {
    message: 'دریافت مدارک',
  },
  '/account/authentication': {
    message: 'ویدیوی احراز هویت',
  },
  '/dashboard': {
    message: 'داشبورد',
  },
  '/sejam/nationalCode': {
    message: 'احراز هویت سجام',
  },
  '/sejam/otp': {
    message: 'احراز هویت سجام',
  },
  '/sejam/info': {
    message: 'اطلاعات سجام شما',
  },
  '/profile': {
    message: 'حساب کاربری',
  },
  '/security': {
    message: 'امنیت و حریم خصوصی',
  },
  '/security/change/user-name': {
    message: 'تغییر نام کاربری',
  },
  '/security/change/password': {
    message: 'تغییر  رمز عبور',
  },
  '/security/change/mobile': {
    message: 'تغییر شماره تلفن همراه',
  },
  '/security/change/mobile/otp': {
    message: 'تغییر شماره تلفن همراه',
  },
  '/security/devices': {
    message: 'دستگاه‌های فعال',
  },
  '/support': {
    message: 'پشتیبانی',
  },
  '/faq': {
    message: 'سوالات متداول',
  },
  '/ticket': {
    message: 'ارسال تیکت پشتیبانی',
  },
  '/ticket/add': {
    message: 'ثبت تیکت جدید',
  },
  '/ticket/view': {
    message: 'مشاهده تیکت',
  },
  '/invest': {
    message: 'معاملات',
  },
  '/invest/add': {
    message: 'ایجاد سفارش جدید',
  },
  '/invest/add?edit=true': {
    message: 'ویرایش سفارش',
  },
  '/transferMoney': {
    message: 'برداشت',
  },
  '/transaction': {
    message: 'تراکنش ها',
  },
};

export const typeMappingHandler = (key: string) => {
  return helperMapping[key] || '---';
};
