import useSWR from "swr";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { Category } from "app/types";

export const useGetCategories = () => {
  const {
    data: categories,
    error,
    mutate: getCategories,
    isValidating: isMutating,
  } = useSWR(
    "api/inventory/categories",
    async () => {
      return await ApiService.inventory.getCategories();
    },
    {
      revalidateOnFocus: false,
    },
  );

  if (error) {
    notification.error({
      message: (error as ApiErrorResponse).title,
    });
  }

  return {
    categories,
    getCategories,
    isMutating,
  };
};
