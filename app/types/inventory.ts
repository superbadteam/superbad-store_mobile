interface SubCategory {
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