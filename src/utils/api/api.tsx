import axios from "axios";
import { UserLoginParams, UserRegisterParams } from "../types";

const SERVER_URL = "http://localhost:8080";

const axiosClient = axios.create({ baseURL: SERVER_URL });

const axiosConfig = {
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: true,
};

export const postUserRegister = (params: UserRegisterParams) => {
  axiosClient.post(`${SERVER_URL}/register`, { params }, axiosConfig);
};

export const postUserLogin = (params: UserLoginParams) => {
  axiosClient.post(`${SERVER_URL}/login`, { params }, axiosConfig);
};
