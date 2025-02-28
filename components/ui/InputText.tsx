"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
}

const InputText: FC<IProps> = (props) => {
  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <input
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        className="w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light"
      />
    </div>
  );
};

export default InputText;
