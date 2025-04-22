import axios from 'axios';
import { UserProfileType } from '@/type/user.ts';

export const createUser = (userBody: UserProfileType) => {
  return axios.post('users', userBody);
};

export const getUserById = (userId: string) => axios.get(`users/${userId}`);
