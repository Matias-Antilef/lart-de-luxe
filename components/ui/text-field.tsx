import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "./input";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function Comp({ label, error, ...inputParams }, ref) {
    return (
      <div className="flex flex-col gap-2 my-2">
        <label className=" "> {label} </label>
        <Input
          ref={ref}
          {...inputParams}
          className=""
          placeholder={"Enter your " + label}
        />
        {error && <span className="text-red-500"> {error} </span>}
        <></>
      </div>
    );
  }
);
