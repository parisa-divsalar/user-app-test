import { MenuListItemType } from '@/type/common.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import FAQSvg from '@/components/UI/Icons/FAQ';
import TicketSvg from '@/components/UI/Icons/Ticket';
import CallSvg from '@/components/UI/Icons/Call';

export const SupportListItems: MenuListItemType[] = [
  {
    id: generateFakeUUIDv4(),
    title: 'سوالات متداول',
    code: 'FAQ',
    icon: <FAQSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'ارسال تیکت پشتیبانی',
    code: 'TICKET',
    icon: <TicketSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'تماس با پشتیبانی',
    code: 'CHAT',
    icon: <CallSvg />,
  },
];
