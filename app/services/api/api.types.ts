/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
    duration: number;
    rating: { scheme: string; value: string };
  };
  categories: string[];
}

export interface ApiFeedResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: EpisodeItem[];
}

export interface ApiLoginResponse {
  emailConfirmed: boolean;
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface ApiRegisterResponse {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  emailConfirmed: string;
  phoneNumberConfirmed: string;
  avatarUrl: string;
  coverUrl: string;
}


/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

export interface ApiErrorResponse {
  title: string;
  status: number;
  traceId: string;
}

export class ApiError extends Error {
  title: string;
  status: number;
  traceId: string;

  constructor(response: ApiErrorResponse | null = null) {
    const title = response?.title ?? "An unknown error occurred";
    const status = response?.status ?? 500;
    const traceId = response?.traceId ?? "";

    super(title);

    this.name = "ApiError";

    this.title = title;
    this.status = status;
    this.traceId = traceId;

    Object.setPrototypeOf(this, ApiError.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
