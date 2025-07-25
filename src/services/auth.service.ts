// services/auth.service.ts
import api from "@/lib/axios";

interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const response = await api.post("/auth/login", payload);
  return response.data;
};
export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
