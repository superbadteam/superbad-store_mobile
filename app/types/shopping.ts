export interface Query {
  Category?: string;
  Condition?: string;
  Keyword?: string;
  PageIndex?: number;
  PageSize?: number;
  IsDescending?: boolean;
  SortBy?: string;
}

export interface Product {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  sold: number;
  rating: number;
  imageUrl: string;
}

export interface Products {
  meta: {
    pageIndex: number;
    totalPages: number;
    totalCount: number;
    pageSize: number;
  };
  data: Product[];
}
