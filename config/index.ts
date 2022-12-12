import { env } from "process";

export const APIS = {
  development: {
    POSTS: "http://localhost:5000",
  },
  production: {
    POSTS: "http://hostinger.observatorio/api/v1",
  },
  test: {
    POSTS: "",
  },
};

export const API_URLS = {
  ...APIS[env.NODE_ENV],
  ...(env.API_URL ? { POSTS: env.API_URL } : {}),
};
