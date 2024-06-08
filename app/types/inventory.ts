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
export interface Review {
  id: string;
  content: string;
  rating: number;
  reviewer: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  product: {
    id: string;
    name: string;
    imageUrl: string;
    typeName: string;
  };
  createdAt: string;
  likes: number;
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
