import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import { api } from "../api/api";
import { ApiErrorResponse, ApiLoginResponse } from "../api/api.types";
import { useStores } from "app/models";

export const useLogin = () => {
  const {
    authenticationStore: { setAuthEmail, setAuthToken },
  } = useStores();

  const { trigger: loginByEmail, isMutating } = useSWRMutation(
    "api/identity/auth/login",
    async (key: string, { arg }: { arg: { email: string; password: string } }) => {
      const { email, password } = arg;
      setAuthEmail(email);
      return await api.loginByEmail(email, password);
    },
    {
      onError: (error: ApiErrorResponse) => {
        notification.error({
          message: error.title,
        });
      },
      onSuccess: (data: ApiLoginResponse) => {
        setAuthToken(data.token.accessToken);
      },
    },
  );

  return {
    loginByEmail,
    isMutating,
  };
};
