import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ id, label, ...props }: FormInput) {
  return (
    <>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor={id} className="capitalize py-1">
          {label}
        </Label>
        <Input id={label} {...props} />
      </div>
    </>
  );
}
