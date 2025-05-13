// LoadingButton.js
import React from "react";
import { ImSpinner2 } from "react-icons/im";

const CustomButton = ({
  loading,
  type = "button",
  text = "Button",
  onClick,
  className = "w-full",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`${className}  text-white bg-slate-800 hover:bg-slate-250/60 focus:ring-1 focus:outline-none focus:ring-slate-250 font-semibold rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-5 disabled:bg-opacity-60 cursor-pointer`}
    >
      {text} {loading && <ImSpinner2 className="animate-spin w-5 h-5" />}
    </button>
  );
};

export default CustomButton;
