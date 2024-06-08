import { api } from "../api";
import { ApiResponse } from "apisauce";
import { AddToCartResponse, ProductDetailResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";

const BASE_ENDPOINT = "/shopping";

export const getProductByID = async (id: string): Promise<ProductDetailResponse> => {
  const response: ApiResponse<ProductDetailResponse | ApiErrorResponse> = await api.apisauce.get(
    `${BASE_ENDPOINT}/products/${id}`,
  );
  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ProductDetailResponse;
};

export const addProductToCart = async (productTypeId: string, quantity: number, authToken: string): Promise<AddToCartResponse> => {
  const response: ApiResponse<AddToCartResponse | ApiErrorResponse> = await api.apisauce.post(
    `${BASE_ENDPOINT}/users/cart`,
    {
      productTypeId, quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as AddToCartResponse;
};
