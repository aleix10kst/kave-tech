export type ApiResponse = { results: ProductDto[] };

export interface ProductDto {
  productSku: string;
  productName: string;
  productPrice: string;
  productImageUrl: string;
  productCollection: string;
  productCategoryHierarchy: string;
}

export type Product = ProductDto & { fav?: boolean };
