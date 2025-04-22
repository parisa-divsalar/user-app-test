import axios from 'axios';

export const getErrors = () => axios.get('errors');
