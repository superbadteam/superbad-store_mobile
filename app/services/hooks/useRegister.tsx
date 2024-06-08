import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import { api } from "../api/api";
import { ApiErrorResponse, ApiRegisterResponse } from "../api/api.types";
import { useStores } from "app/models";
import { useNavigation } from "@react-navigation/native";

export const useRegister = () => {
  const navigation = useNavigation();
  const {
    authenticationStore: { setAuthEmail },
  } = useStores();
  const { trigger: signUpByEmail, isMutating } = useSWRMutation(
    "api/identity/auth/register",
    async (
      key: string,
      { arg }: { arg: { name: string; email: string; password: string; confirmPassword: string } },
    ) => {
      const { name, email, password, confirmPassword } = arg;
      setAuthEmail(email);
      return await api.signUpByEmail(name, email, password, confirmPassword);
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: (data: ApiRegisterResponse) => {
        navigation.navigate("Login");
        setAuthEmail(data.email);
      },
    },
  );

  return {
    signUpByEmail,
    isMutating,
  };
};
