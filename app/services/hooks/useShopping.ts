import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { ProductDetailResponse } from "app/types";
import { useStores } from "app/models";
import { useNavigation } from "@react-navigation/native";
import { translate } from "app/i18n";

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

export const useAddProductToCart = () => {
  const {
    authenticationStore: { authToken },
  } = useStores();
  const navigation = useNavigation<any>();

  const { trigger: addProductToCart, isMutating } = useSWRMutation(
    "api/shopping/users/cart",
    async () => {
      if (!authToken) return;
      await ApiService.shopping.addProductToCart("9652cb3b-40bf-4707-a949-bd12185ad428", 1, authToken);
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: () => {
        notification.success({
          message: translate("productDetailScreen.notification.addSuccess"),
        });
        navigation.navigate("CartScreen");
      },
    },
  );

  return {
    addProductToCart,
    isMutating,
  };
};