import axios from "axios";
import { UserLoginParams, UserRegisterParams } from "../types";

const SERVER_URL = process.env.SERVER_URL;

const axiosClient = axios.create({baseURL: SERVER_URL});

const axiosConfig = { 
    headers: {"content-type": "application/json"},
    withCredentials: true 
};

export const postUserRegister = (params: UserRegisterParams) => {
    axiosClient.post('/register', params, axiosConfig);
};

export const postUserLogin = (params: UserLoginParams) => {
    axiosClient.post('/login', params, axiosConfig);
};