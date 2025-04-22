import axios from 'axios';

export const login = (body: any) => axios.put('sessions', body);

export const loginToBanx = (userName: string, password: string) => {
  console.log(userName, password);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};
