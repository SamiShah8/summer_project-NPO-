import axios, { AxiosInstance } from "axios";
import { getCookie } from 'cookies-next';
/**
 * Http Utility.
 */

export const setTokenInHeader = (ax: AxiosInstance, token: any) => {
  // eslint-disable-next-line no-param-reassign
  ax.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

setTokenInHeader(http, getCookie('token'));

export default http;
