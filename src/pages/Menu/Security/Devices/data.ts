import { DevicesType } from '@/type/devices.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import android from '@/assets/images/icon/android.svg';

export const DeviceData: DevicesType[] = [
  {
    id: generateFakeUUIDv4(),
    title: 'دستگاه های فعلی',
    model: 'SM-A736B',
    icon: android,
    buildNumber: '5.210.150.144 | BANX Android 5.4.3',
  },
  {
    id: generateFakeUUIDv4(),
    title: 'دستگاه های دیگر',
    model: 'SM-A36',
    icon: android,
    buildNumber: '5.210.150.144 | BANX Android 5.6.3',
  },
];
