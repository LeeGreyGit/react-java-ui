import axios from "axios";

import { _URL } from "./apiUrl";

export const getTodo = async (): Promise<any> => {
  try {
    const response = await axios.get(_URL.TODO_LIST);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postUpdateApi = async (param: any): Promise<any> => {
  try {
    const response = await axios.post(_URL.UPDATE, param);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postDeleteApi = async (id: number): Promise<any> => {
  console.log(id)
  try {
    const response = await axios.post(_URL.DELETE.replace(":id", id.toString()));
    return response;
  } catch (error) {
    console.error(error);
  }
};