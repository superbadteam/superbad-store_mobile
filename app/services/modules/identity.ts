import { api } from "../api";
import { ApiResponse } from "apisauce";
import { ApiLoginResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";
import Config from "app/config";

export const loginByEmail = async (email: string, password: string): Promise<ApiLoginResponse> => {
  const response: ApiResponse<ApiLoginResponse | ApiErrorResponse> = await api.apisauce.post(
    Config.ENDPOINT.identity.login,
    {
      email,
      password,
    },
  );

  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ApiLoginResponse;
};
