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