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
export interface AddToCartResponse {
  items: Item[];
  totalPrice: number;
}

export interface Item {
  id: string;
  quantity: number;
  totalPrice: number;
  productType: ProductType;
  deletedAt: null;
  deletedBy: null;
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  product: Product;
  deletedAt: null;
  deletedBy: null;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  deletedAt: null;
  deletedBy: null;
}
