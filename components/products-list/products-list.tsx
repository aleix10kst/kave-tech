import { Product } from "@/lib/types/product.type";
import { ReactNode } from "react";

export interface ProductsListProps {
  products: Product[];
  itemTemplate: (item: Product, index: number) => ReactNode;
  paginator?: ReactNode;
  onPageChange?: (newPage: number) => void;
}

export const ProductsList = ({
  products,
  itemTemplate,
  paginator = null,
}: ProductsListProps) => {
  return (
    <>
      <div className="mb-[75px] grid grid-cols-1 gap-x-[25px] gap-y-10 md:grid-cols-2 lg:mb-44 lg:grid-cols-3">
        {products.map((product, index) => itemTemplate(product, index))}
      </div>
      {products.length > 0 && paginator}
    </>
  );
};
