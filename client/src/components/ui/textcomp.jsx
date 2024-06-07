"use client";
import Image from "next/image";
import React, { useState } from "react";
import eyeOpen from "../../app/assets/Loginimages/ojo-abierto.png";
import eyeClosed from "../../app/assets/Loginimages/ojo-cerrado.png";

export const Textfield = ({ className, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        className={`${className} ${type === "password" ? "pr-10" : ""}`}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
        >
          {showPassword ? (
            <Image src={eyeOpen} alt="open eye" width={24} height={24} />
          ) : (
            <Image src={eyeClosed} alt="close eye" width={24} height={24} />
          )}
        </button>
      )}
    </div>
  );
};