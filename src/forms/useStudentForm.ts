import { Student } from "@/hooks/Student";
import { CreateStudentMutation } from "@/mutation/Student";
import { FormApi, useForm } from "@tanstack/react-form";

export function useStudentForm(): FormApi<Student> {
  const { mutate } = CreateStudentMutation();
  const form = useForm<Student>({
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
      attendance: 0,
      mobileNumber: "",
    },
    onSubmit: async ({ value }) => {
      try {
        console.log(value);
        mutate(value);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return form;
}
