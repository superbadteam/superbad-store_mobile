import { api } from "../api";
import { ApiResponse } from "apisauce";
import { Category, ProductsResponse } from "app/types";
import { getGeneralApiProblem } from "../api/apiProblem";

export const getCategories = async (): Promise<any> => {
  try {
    const response: ApiResponse<Category[]> = await api.apisauce.get("/inventory/categories");

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  } catch (e) {
    return { kind: "unknown-error", temporary: true };
  }
};

export const getMyProducts = async (): Promise<any> => {
  try {
    const response: ApiResponse<ProductsResponse> = await api.apisauce.get(
      "/inventory/products/me",
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  } catch (e) {
    return { kind: "unknown-error", temporary: true };
  }
};

export const getMyProductById = async (id: string): Promise<any> => {
  try {
    const response: ApiResponse<ProductsResponse> = await api.apisauce.get(
      `/inventory/products/me/${id}`,
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  } catch (e) {
    return { kind: "unknown-error", temporary: true };
  }
};
