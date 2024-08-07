import axios from "axios";

const API_URL = import.meta.env.VITE_APP_BASE_URL;

export const axiosApi = axios.create({
  baseURL: API_URL,
});
