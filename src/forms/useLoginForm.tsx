import { LoginMutation } from "@/mutation/userMutation";
import { FormApi, useForm } from "@tanstack/react-form";
import { toast } from "sonner";

interface LoginValues {
  email: string;
  password: string;
}

export function LoginForm(): FormApi<LoginValues> {
  const mutation = LoginMutation();
  async function handleSubmit({ value }: { value: LoginValues }) {
    try {
      const response = await mutation.mutateAsync(value);
      if (response.user) {
        toast.success(response.message);
      } else {
        toast.warning(response.message);
      }
      return response;
    } catch (err) {
      console.log("error at ", err);
      toast.error("Server err");
    }
  }

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return form;
}
