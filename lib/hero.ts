import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { API_URLS } from "../config";

export interface Banner {
  id: number;
  title: string;
  content: string;
  img_banner: string;
}

const postConfig: AxiosRequestConfig = {
  baseURL: API_URLS.POSTS,
};

const clienteInstance = axios.create(postConfig);

export async function getInfoBanner() {
  try {
    const { data } = await clienteInstance.get("/banner");
    return data;
  } catch (error: any | AxiosError) {
    console.error(error.message || error.response);
  }
}
