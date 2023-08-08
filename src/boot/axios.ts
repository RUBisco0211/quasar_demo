import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API,
  timeout: 10000,
  headers:{}
});

export { axiosInstance };
