import useSWRMutation from "swr/mutation";
import { notification } from "antd";
import ApiService from "../modules";
import { ApiErrorResponse } from "../api/api.types";
import { ApiLoginResponse } from "app/types";
import { useStores } from "app/models";
import Config from "app/config";

export const useLogin = () => {
  const {
    authenticationStore: { setAuthEmail, setAuthToken },
  } = useStores();

  const { trigger: loginByEmail, isMutating } = useSWRMutation(
    Config.ENDPOINT.identity.login,
    async (key: string, { arg }: { arg: { email: string; password: string } }) => {
      const { email, password } = arg;
      setAuthEmail(email);
      return await ApiService.identity.loginByEmail(email, password);
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
