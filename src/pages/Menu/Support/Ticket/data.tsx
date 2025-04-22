import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import { PriorityType, TicketType } from '@/type/ticket.ts';

export const TicketData: TicketType[] = [
  {
    id: generateFakeUUIDv4(),
    subject: 'موضوع تیکت نمونه - (۱۲۵۶)',
    priority: PriorityType.HIGH,
    description:
      'توضیحات ارائه شده مشتری برای تیکت لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی',
    status: 'WAITING_FOR_ANSWER',
    date: '25 آبان 1403 - ساعت 14:30',
    file: [],
  },
  {
    id: generateFakeUUIDv4(),
    subject: 'موضوع تیکت نمونه  - (۲۵۶۹)',
    priority: PriorityType.LOW,
    description:
      'توضیحات ارائه شده مشتری برای تیکت لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی',
    status: 'ANSWERED',
    date: '25 آبان 1403 - ساعت 14:30',
    file: [],
  },
  {
    id: generateFakeUUIDv4(),
    subject: 'موضوع تیکت نمونه  - (۲۵۶)',
    priority: PriorityType.MEDIUM,
    description:
      'توضیحات ارائه شده مشتری برای تیکت لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی',
    status: 'CLOSED',
    date: '25 آبان 1403 - ساعت 14:30',
    file: [],
  },
];
