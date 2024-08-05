import {
  createStudent,
  deleteStudent,
  getStudents,
  Student,
} from "@/hooks/Student";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useStudents() {
  return useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: getStudents,
  });
}

export function CreateStudentMutation() {
  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: async (student: Student) => createStudent(student),
  });

  return { mutate, isError, isSuccess, isPending };
}

export function DeleteStudentMutation() {
  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: async (emailId: string) => deleteStudent(emailId),
  });
  return { mutate, isError, isSuccess, isPending };
}
