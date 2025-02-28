"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  placeholder?: string;
  rules?: object;
}

const InputTextArea: FC<IProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name];

  return (
    <div>
      <textarea
        id={props.name}
        placeholder={props.placeholder}
        rows={4}
        className="w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light"
        {...register(props.name, { ...props.rules })}
      />

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputTextArea;
