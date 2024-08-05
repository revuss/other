import { RegisterValues } from "@/forms/useRegisterForm";
import { login, UserLoginData, LoginResponse } from "@/hooks/user";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:2024/user";

export function LoginMutation(): UseMutationResult<
  LoginResponse,
  Error,
  UserLoginData,
  unknown
> {
  return useMutation<LoginResponse, Error, UserLoginData>({
    mutationFn: async (userData: UserLoginData) => {
      const response = await login(userData);
      return response;
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
    },
    onError: (error) => {
      console.log("Mutation error:", error);
    },
  });
}

export function RegisterMutation() {
  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: async (userData: RegisterValues) => {
      try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            error.response?.data?.message ||
              "An error occurred during registration"
          );
        } else {
          throw new Error("An unknown error occurred during registration");
        }
      }
    },
  });

  return { mutate, isError, isSuccess, isPending };
}
