import { RegisterMutation } from "@/mutation/userMutation";
import { FormApi, useForm } from "@tanstack/react-form";
import { toast } from "sonner";

export interface RegisterValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export function RegisterForm(): FormApi<RegisterValues> {
  const { mutate } = RegisterMutation();
  async function handleSubmit({ value }: { value: RegisterValues }) {
    try {
      console.log(value);
      mutate(value, {
        onSuccess: (response) => {
          console.log("response", response);
          if (response.message === "Account created") {
            toast.success(response.message);
          } else {
            toast.warning(response.message || "An error occurred");
          }
        },
        onError: (error) => {
          console.log("error at", error);
          toast.error(error.message || "An unknown error occurred.");
        },
      });
    } catch (err) {
      console.log("error at", err);
      toast.error("An unknown error occurred.");
    }
  }

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
  });

  return form;
}
