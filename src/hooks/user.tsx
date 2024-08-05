import { RegisterValues } from "@/forms/useRegisterForm";
import axios from "axios";

const API_URL = "http://localhost:2024/user";

export interface UserLoginData {
  email: string;
  password: string;
}

export interface ErrorResponse {
  message: string;
  user?: string;
}

export interface LoginResponse {
  message: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
}
export interface RegisterResponse {
  message: string;
}

export async function register(
  userData: RegisterValues
): Promise<RegisterResponse> {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse = error.response?.data as ErrorResponse;
      return {
        message: errorResponse?.message || "An unknown error occurred.",
      };
    } else {
      throw error;
    }
  }
}

export async function login(userData: UserLoginData): Promise<LoginResponse> {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorResponse = err.response?.data as ErrorResponse;
      return {
        message: errorResponse?.message || "An unknown error occurred.",
      };
    } else {
      throw err;
    }
  }
}
