"use client";
import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
}

const InputPassword: React.FC<InputProps> = (props) => {
  // State to toggle showing or hiding the password plain text.
  const [isPlainText, setIsPlainText] = useState(false);

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <div className="relative">
        <input
          id={props.name}
          type={isPlainText ? "text" : "password"}
          placeholder={props.placeholder}
          className="w-full py-2 px-2 text-sm font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
        />

        <TogglePass isPlainText={isPlainText} onClick={() => setIsPlainText((prev) => !prev)} />
      </div>
    </div>
  );
};

const TogglePass: FC<{ onClick: () => void; isPlainText: boolean }> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-customGray"
    >
      {props.isPlainText ? <FiEye /> : <LuEyeClosed />}
    </button>
  );
};

const PasswordRules: React.FC<{ password: string }> = ({ password }) => {
  const rules = [
    { text: "Minimum 8 characters", isValid: password?.length >= 8 },
    {
      text: "At least one uppercase letter (A-Z)",
      isValid: /[A-Z]/.test(password),
    },
    { text: "Contains a number or symbol", isValid: /[\d\W]/.test(password) },
  ];

  return (
    <ul className="text-customGray text-sm mt-1 space-y-1">
      {rules.map((rule, index) => (
        <li key={index} className={`font-normal ${rule.isValid ? "text-success" : ""}`}>
          ✓ {rule.text}
        </li>
      ))}
    </ul>
  );
};

const ConfirmRules: FC<{ isConfirmed: boolean }> = (props) => {
  return (
    <p className={`font-normal text-sm mt-1 text-customGray ${props.isConfirmed ? "text-success" : ""}`}>
      ✓ Passwords match
    </p>
  );
};

export default InputPassword;
