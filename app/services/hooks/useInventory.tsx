import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { Category } from "app/types";
import Config from "app/config";

export const useGetCategories = () => {
  const { trigger: getCategories, isMutating } = useSWRMutation(
    Config.ENDPOINT.inventory.categories,
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
