import { CardDescription, CardHeader, CardTitle } from "../ui/card";

interface FormProps {
  title: string;
  description: string;
}

export function FormHead({ title, description }: FormProps) {
  return (
    <>
      <CardHeader className="text-center my-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm py-2 ">
          {description}
        </CardDescription>
      </CardHeader>
    </>
  );
}
