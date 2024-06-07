import useSWR from "swr";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";

export const useGetCategories = () => {
  const {
    data: categories,
    mutate: getCategories,
    isValidating: isMutating,
  } = useSWR(
    "api/inventory/categories",
    async () => {
      return await ApiService.inventory.getCategories();
    },
    {
      revalidateOnFocus: false,
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
    },
  );

  return {
    categories,
    getCategories,
    isMutating,
  };
};
