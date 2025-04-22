import { InvestStatus, InvestType } from '@/type/invest.ts';
import { Theme } from '@/store/common/commonSlice.ts';

export function translateInvestStatus(status: InvestStatus) {
  switch (status) {
    case 'WAITING_TO_BUY':
      return 'در انتظار خرید';
    case 'WAITING_TO_SELL':
      return 'در انتظار فروش';
    case 'SOLD':
      return 'فروخته شده';
    case 'PURCHASED':
      return 'خریداری شده';
    default:
      return '';
  }
}

export function translateInvestType(investType: InvestType) {
  switch (investType) {
    case 'GOLD':
      return 'طلا';
    case 'BURSE':
      return 'بورس';
    case 'HOUSING':
      return 'مسکن';
    default:
      return 'پس انداز';
  }
}

export function getStatusBgColor(status: InvestStatus, theme: Theme) {
  switch (status) {
    case 'WAITING_TO_BUY':
    case 'WAITING_TO_SELL':
      return theme === 'dark' ? 'warning.dark' : 'warning.light';
    case 'SOLD':
      return theme === 'dark' ? 'error.dark' : 'error.light';
    default:
      return theme === 'dark' ? 'success.dark' : 'success.light';
  }
}

export function getStatusTextColor(status: InvestStatus) {
  switch (status) {
    case 'WAITING_TO_BUY':
    case 'WAITING_TO_SELL':
      return 'warning.main';
    case 'SOLD':
      return 'error.main';
    default:
      return 'success.main';
  }
}
