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
  id?: string;
  name: string;
  description: string;
  categoryId: string;
  types: ProductItemType[];
  images: Image[];
  condition: string;
}
export interface ProductItem extends Product {
  userId: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
  sold: number;
}


export interface Image {
  url: string;
}

export interface ProductItemType {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export interface ProductsResponse {
  meta: paging;
  data: Product[];
}
