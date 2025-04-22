import { generateFakeUUIDv4 } from '@/utils/generateUUID';

import { AccountWizardType } from '@/type/account.ts';

export const AccountWizardData: AccountWizardType[] = [
  {
    id: generateFakeUUIDv4(),
    step: 0,
    label: 'ساخت حساب کاربری',
    description: `شروع مراحل افتتاح حساب آنلاین بنکس`,
  },
  {
    id: generateFakeUUIDv4(),
    step: 1,
    label: 'دریافت مدارک',
    description: 'اسکن کارت ملی و شناسنامه و مدارک',
  },
  {
    id: generateFakeUUIDv4(),
    step: 2,
    label: 'احراز هویت',
    description: 'ضبط یک ویدیوی کوتاه برای احراز هویت',
  },
  {
    id: generateFakeUUIDv4(),
    step: 3,
    label: 'بررسی اطلاعات',
    description: 'بررسی و اعتبارسنجی اطلاعات شما',
  },
];
