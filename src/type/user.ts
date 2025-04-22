import { IInvest } from '@/type/invest.ts';

export interface UserStateTypes {
  profile: any;
  token: string | undefined;
  refreshToken: string | undefined;
  userId: string | undefined;
  investList: IInvest[];
}

export interface UserProfileType {
  national_id?: string;
  mobile_number?: string;
  birth_day?: string;
  birth_month?: string;
  birth_year?: string;
}

export interface UserProfileSejamType {
  name?: string;
  firstName?: string;
  lastName?: string;
  fatherName?: string;
  birthDate?: string;
  city?: string;
  ssn?: string;
  phoneNumber: string;
  nationalCode?: string;
  email?: string | undefined;
}
