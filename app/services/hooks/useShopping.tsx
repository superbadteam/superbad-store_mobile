import useSWR from "swr";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";


export const useGetProductByID = (id: string) => {
  const {
    data: product,
    mutate: getProductByID,
    isValidating: isMutating,
  } = useSWR(
    `/shopping/products/${id}`,
    async () => {
      return await ApiService.shopping.getProductByID(id);
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
    product,
    getProductByID,
    isMutating,
  };
};