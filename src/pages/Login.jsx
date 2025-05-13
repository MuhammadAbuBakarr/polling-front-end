import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import useAxios from "../api/useAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import useApi from "../api/useApi";

export default function Login() {
  const [loading, setloading] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();
  const api = useAxios();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!userName || !password) {
        return toast.error("Please Enter All Details");
      }
      if (password?.length < 5) {
        return toast.error("Password Must be of Atleast 5 Characters");
      }
      const { data } = await api.put("/login", {
        userName,
        password,
      });
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Login Successfull");
      nav("/");
    } catch (e) {
      console.log(e);
      toast.error("Please try Again");
    }
  };
  return (
    <div className="h-screen">
      <div className="h-full w-full  relative">
        <img
          className="h-full w-full object-cover"
          alt="background"
          src="https://images.pexels.com/photos/65911/winter-nature-season-trees-65911.jpeg"
        />
        <div className="absolute top-0 w-full h-full">
          <div className="bg-gray-100 w-full backdrop-blur-3xl h-full bg-opacity-30">
            <div className="w-full h-full flex justify-center items-center">
              <div className="max-w-md mx-auto bg-white bg-opacity-10 border-2 border-gray-500 border-opacity-30 drop-shadow-xl shadow-xl w-full p-5 rounded-md py-10 space-y-3 md:space-y-5">
                <h1 className="text-center tracking-tighter text-4xl font-bold text-gray-950 uppercase">
                  Poll Forge
                </h1>
                <h2 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <CustomInput
                    name={"userName"}
                    label={"Enter User name"}
                    placeholder="Enter User name"
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName}
                  />
                  <CustomInput
                    name={"password"}
                    label={"Enter Password"}
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                  />
                  <CustomButton
                    loading={loading}
                    text="Continue"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
