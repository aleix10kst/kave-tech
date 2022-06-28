import GenericPage from "@/components/generic-page/generic-page";
import Paginator from "@/components/paginator/paginator";
import ProductCard from "@/components/product-card/product-card";
import { ProductsList } from "@/components/products-list/products-list";
import { useProducts } from "@/lib/hooks/useProducts";
import { NextPage } from "next";
import { useState } from "react";

const PAGE_SIZE = 12;

export const Products: NextPage = () => {
  const [first, setFirst] = useState(0);
  const [fetchedProducts] = useProducts();

  const products = fetchedProducts;

  return (
    <GenericPage title="Productos" subtitle="Lorem ipsum dolor sit amet.">
      <ProductsList
        products={products}
        itemTemplate={(product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClickFav={() => {}}
          />
        )}
        paginator={
          <Paginator
            first={first}
            pageLinkSize={8}
            totalElements={1000}
            pageSize={PAGE_SIZE}
            onPageChange={setFirst}
          />
        }
      />
    </GenericPage>
  );
};

export default Products;
