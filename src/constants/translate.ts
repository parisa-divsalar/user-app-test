import { InvestStatus, InvestType } from '@/type/invest.ts';
import { Theme } from '@/store/common/commonSlice.ts';

export function translateInvestStatus(status: InvestStatus) {
  switch (status) {
    case 'created':
      return 'ایجاد شده';
    case 'failed':
      return 'ناموفق';
    case 'pending':
      return 'در حال بررسی';
    case 'cancelling':
      return  'لغو شده';
    case 'done':
    return 'انجام شده'
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
    case 'done':
      return theme === 'dark' ? 'warning.dark' : 'warning.light';
    case 'cancelled' :
      return theme === 'dark' ? 'error.dark' : 'error.light';
       case 'failed' :
      return theme === 'dark' ? 'error.dark' : 'error.light';
    default:
      return theme === 'dark' ? 'success.dark' : 'success.light';
  }
}

export function getStatusTextColor(status: InvestStatus) {
  switch (status) {
    case 'pending':
      return 'warning.main';
    case 'cancelled':
      case 'failed' :
      return 'error.main';
    default:
      return 'success.main';
  }
}
