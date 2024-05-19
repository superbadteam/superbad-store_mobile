import { paging } from "./paging";
export interface SubCategory {
  name: string;
  id: string;
  subCategories: string | null;
}
export interface Category {
  name: string;
  id: string;
  subCategories: SubCategory[];
}

export interface Product {
  name: string;
  description: string;
  categoryId: string;
  types: ProductItemType[];
  images: Image[];
  condition: string;
}

export interface Image {
  url: string;
}

export interface ProductItemType {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export interface ProductsResponse {
  meta: paging;
  data: Product[];
}
