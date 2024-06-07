import { api } from "../api";
import { ApiResponse } from "apisauce";
import { ProductDetailResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";
import Config from "app/config";

export const getProductDetail = async (id: string): Promise<ProductDetailResponse> => {
  const response: ApiResponse<ProductDetailResponse | ApiErrorResponse> = await api.apisauce.get(
    Config.ENDPOINT.shopping.products(id),
  );
  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ProductDetailResponse;
};
