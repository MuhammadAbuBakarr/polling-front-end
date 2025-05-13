import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CustomInput = ({
  name,
  value,
  onChange,
  label,
  type = "text",
  placeholder = "Enter Value Here",
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={
              type === "password" ? (!showPassword ? "password" : "text") : type
            }
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-transparent outline-none border focus:ring-1 border-gray-500 border-opacity-30 text-gray-900 placeholder:text-gray-700 sm:text-sm rounded-lg focus:ring-gray-250 focus:border-gray-250 block w-full p-2.5 pr-10"
            placeholder={placeholder}
          />
          {type === "password" && (
            <button
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              type="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <FiEyeOff className="h-5 w-5 text-gray-700" />
              ) : (
                <FiEye className="h-5 w-5 text-gray-700" />
              )}
            </button>
          )}
        </div>
      </div>
      {error && <div className="text-red-700 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default CustomInput;
