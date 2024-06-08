import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { useStores } from "app/models";
import { useNavigation } from "@react-navigation/native";
import { translate } from "app/i18n";
import useSWR from "swr";

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