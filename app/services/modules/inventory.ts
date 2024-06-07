import { api } from "../api";
import { ApiResponse } from "apisauce";
import { Category, Product, ProductsResponse } from "app/types";
import { ApiError, ApiErrorResponse } from "../api/api.types";
import Config from "app/config";

export const getCategories = async (): Promise<Category[]> => {
  const response: ApiResponse<Category[] | ApiErrorResponse> = await api.apisauce.get(
    Config.ENDPOINT.inventory.categories,
  );
  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as Category[];
};

export const createProduct = async (product: Product, authToken: string): Promise<any> => {
  const response: ApiResponse<ProductsResponse | ApiErrorResponse> = await api.apisauce.post(
    Config.ENDPOINT.inventory.products,
    product,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new ApiError(response.data as ApiErrorResponse);
  }

  return response.data as ProductsResponse;
};
