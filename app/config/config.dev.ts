/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export default {
  API_URL: "http://localhost:3000/api",
  ENDPOINT: {
    identity: {
      login: "identity/auth/login",
    },
    inventory: {
      categories: "inventory/categories",
      products: "inventory/products",
    },
    shopping: {
      products: (id: string) => `shopping/products/${id}`,
    },
  },
};
