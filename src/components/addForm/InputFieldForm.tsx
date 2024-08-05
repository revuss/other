import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export function InputFieldForm({ label, ...props }: { label: string }) {
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4 justify-between">
        <Label htmlFor="name" className="text-right">
          {label}
        </Label>
        <Input className="col-span-3" {...props} />
      </div>
    </>
  );
}
