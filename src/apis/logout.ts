import storage from 'redux-persist/lib/storage';

export const logout = () => {
  localStorage.clear();
  storage.removeItem('persist:root').then(() => window.location.reload());
};
