import React, { useState } from "react";
import useAxios from "./useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useApi = (method) => {
  const api = useAxios();
  const nav = useNavigate();
  //   States
  const [response, setresponse] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //   Axios Api Call Configuration
  const options = {
    method,
  };

  //   Api Call Function
  const apiCall = async (url, data) => {
    setloading(true);
    try {
      const res = await api.request({ ...options, url, data });
      setresponse(res);
      setloading(false);
      return res;
    } catch (e) {
      console.log(e);
      if (e?.status === 401) {
        localStorage.clear();
        toast.error("Login Session Expired, Please Login Again!");
        nav("/login");
      }
      seterror(e);
      setloading(false);
      throw new Error(e?.response?.data?.message);
    }
  };

  return { apiCall, loading, response, error };
};

export default useApi;
