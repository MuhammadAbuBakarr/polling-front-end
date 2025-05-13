import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      return nav("/login");
    }
  }, [user]);

  return {};
};

export default useAuth;
