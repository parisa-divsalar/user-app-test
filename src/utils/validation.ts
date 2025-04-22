import MobileChecker, { mobileRegex } from '@/utils/mobileChecker.ts';

export const toEnglishNumber = (str: string) => {
  const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return str
    .split('')
    .map((c) => englishNumbers[persianNumbers.indexOf(c)] || c)
    .join('');
};

export const msisdnValidation = (msisdn: string) => {
  return (
    msisdn.length < 10 ||
    MobileChecker(msisdn) === 'error' ||
    (MobileChecker(msisdn) !== 'error' && !mobileRegex.test(MobileChecker(msisdn)))
  );
};

export const emailValidation = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const isContainsLowercase = (value: string) => {
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  return isContainsUppercase.test(value);
};

export const validateDigit = (value: string) => value.search(/[0-9]/) < 0;

export const checkPasswordLength = (value: string) => value.length < 8;

export const isNationalCodeValid = (nationalCode: string) => {
  try {
    if (nationalCode.length !== 10) {
      return false;
    }
    // Check for equal numbers
    const allDigitEqual = [
      '0000000000',
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
    ];
    if (allDigitEqual.includes(nationalCode)) {
      return false;
    }
    // if (convertPersianNumberToEnglishAndRemoveZeroAtIndex0(nationalCode) === '') {
    //   return false;
    // }
    if (nationalCode.substring(3, 7) === '****') {
      return true;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(nationalCode[i], 10) * (10 - i);
    }
    const lastNumber = parseInt(nationalCode[9], 10);
    const check = sum % 11;
    return check < 2 ? lastNumber === check : lastNumber + check === 11;
  } catch (e) {
    return false;
  }
};
