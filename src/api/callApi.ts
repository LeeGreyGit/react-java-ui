import axios, { AxiosError } from "axios";

import { _URL } from "./apiUrl";

export const getUserList = async (): Promise<any> => {
  try {
    const response = await axios.get(_URL.USER_LIST);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postLoginApi = async (param: any): Promise<any> => {
  var data;
  try {
    const response = await axios.post(_URL.LOGIN, param);
    data = response.data;
  } catch (error) {
    const axiosError = error as AxiosError<null>;
    console.error(error);

    if (axiosError.response) {
      data = axiosError.response.data;
    }
  }
  return data;
};
