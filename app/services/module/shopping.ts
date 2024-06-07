import { api } from "../api";
import { ApiResponse } from "apisauce";
import { ProductDetailResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";

const BASE_ENDPOINT = "/shopping";

export const getDetailProduct = async (id: string): Promise<ProductDetailResponse> => {
  const response: ApiResponse<ProductDetailResponse | ApiErrorResponse> = await api.apisauce.get(
    `${BASE_ENDPOINT}/products/${id}`,
  );
  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ProductDetailResponse;
};
