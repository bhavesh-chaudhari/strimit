import axios from "axios";
import { API_BASE_URL } from "../config/baseUrl";

const client = axios.create({ baseURL: API_BASE_URL });

export const request = ({ ...options }) => {
//   client.defaults.headers.common.Authorization = `Bearer token`;

  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error.response;
  };

  return client(options).then(onSuccess).catch(onError);
};
