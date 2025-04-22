import axios from 'axios';

export const getJobCategories = () => axios.get('job_categories');

export const uploadFile = (formData: any) =>
  axios.post('/upload_media', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteFile = (fileName: string | undefined) =>
  axios.delete(`/remove_media/${fileName}`);
