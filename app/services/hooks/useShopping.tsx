import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../module";
import { ApiErrorResponse } from "../api/api.types";
import { ProductDetailResponse } from "app/types";

export const useGetDetailProduct = (id: string) => {
  const { trigger: getProductDetail, isMutating } = useSWRMutation(
    "api/shopping/products/{id}",
    async () => {
      return await ApiService.shopping.getDetailProduct(id);
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: (data: ProductDetailResponse) => {
        return data;
      },
    },
  );

  return {
    getProductDetail,
    isMutating,
  };
};
