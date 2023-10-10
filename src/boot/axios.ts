import axios, { AxiosInstance } from 'axios';
import { Loading, QSpinnerFacebook } from 'quasar';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API,
  timeout: 10000,
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    Loading.show({
      spinnerSize: 140,
      delay: 500,
      spinner: QSpinnerFacebook,
      message: '请稍等',
      messageColor: 'white',
      spinnerColor: 'warning',
    });
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => {
    Loading.hide();
    return response;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance };
