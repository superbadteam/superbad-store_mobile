import { api } from "../api";
import { ApiResponse } from "apisauce";
import { ImageUploadResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";

const BASE_ENDPOINT = "/shared";

export const uploadsImage = async (
  images: FormData,
  authToken: string,
): Promise<ImageUploadResponse> => {
  const response: ApiResponse<ImageUploadResponse | ApiErrorResponse> = await api.apisauce.post(
    `${BASE_ENDPOINT}/uploads/images`,
    images,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
    },
  );

  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ImageUploadResponse;
};
