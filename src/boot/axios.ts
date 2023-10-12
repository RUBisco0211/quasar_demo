import axios, { AxiosInstance } from 'axios';
import { Loading, QSpinnerFacebook } from 'quasar';

function getAxiosInstance(baseUrl: string): AxiosInstance {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
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
    (error) => {
      Loading.hide();
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}

export { getAxiosInstance };
