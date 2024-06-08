import { paging } from "./paging";

export interface ProductItem {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  sold: number;
  rating: number;
  imageUrl: string;
}

export interface GetProductsResponse {
  meta: paging;
  data: ProductItem[];
}
