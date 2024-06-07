export interface ApiLoginResponse {
  emailConfirmed: boolean;
  token: {
    accessToken: string;
    refreshToken: string;
  };
}
