import { ProductItemType } from "./inventory";

export interface ProductDetailResponse {
  id: string;
  userId: string;
  name: string;
  description: string;
  categoryId: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
  sold: number;
  condition: string;
  types: ProductItemType[];
  images: ImageProducts[];
}

export interface ImageProducts {
  id: string;
  url: string;
}
