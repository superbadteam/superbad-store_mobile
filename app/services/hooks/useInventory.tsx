import useSWR from "swr";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { useStores } from "app/models";
import useSWRMutation from "swr/mutation";
import { Product } from "app/types";
import { translate } from "app/i18n";
import { useState } from "react";

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

export const useInventory = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    categoryId: "",
    types: [],
    images: [{ url: "xxx" }],
    condition: "New",
  });

  const {
    authenticationStore: { authToken },
  } = useStores();

  const { trigger: createProduct, isMutating } = useSWRMutation(
    "api/inventory/products",
    async () => {
      if (!authToken) return;
      const imageCalls = product.types.map(async (type, index) => {
        const res = await fetch(type.imageUrl);
        const blob = await res.blob();
        const fd = new FormData();
        const file = new File([blob], "filename", { type: "image/jpeg" });
        fd.append("images", file);
        const response = await ApiService.shared.uploadsImage(fd, authToken);
        product.types[index].imageUrl = response.urls[0];
        setProduct({ ...product });
      });

      await Promise.all(imageCalls);
      await ApiService.inventory.createProduct(product, authToken);
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: () => {
        notification.success({
          message: translate("DemoCreateProductScreen.notification.createSuccess"),
        });
      },
    },
  );

  return {
    createProduct,
    isMutating,
    product,
    setProduct,
  };
};
