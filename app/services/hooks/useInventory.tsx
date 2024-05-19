import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../module";
import { ApiErrorResponse } from "../api/api.types";
import { Category } from "app/types";

export const useGetCategories = () => {
  const { trigger: getCategories, isMutating } = useSWRMutation(
    "api/inventory/categories",
    async () => {
      return await ApiService.inventory.getCategories();
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: (data: Category[]) => {
        return data;
      },
    },
  );

  return {
    getCategories,
    isMutating,
  };
};
