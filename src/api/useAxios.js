import axios from "axios";
const SERVER_URL = "https://polling-backend-eight.vercel.app";
const useAxios = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  const api = axios.create({
    baseURL: SERVER_URL,
  });
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return api;
};

export default useAxios;
