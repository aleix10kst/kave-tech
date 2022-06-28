import GenericPage from "@/components/generic-page/generic-page";
import ProductCard from "@/components/product-card/product-card";
import { ProductsList } from "@/components/products-list/products-list";
import { useProducts } from "@/lib/hooks/useProducts";
import type { NextPage } from "next";

export const MyFavoritesPage: NextPage = () => {
  const [fetchedProducts] = useProducts();

  const products = fetchedProducts.slice();

  return (
    <GenericPage
      title="Lista de Favoritos"
      subtitle="Lorem ipsum dolor sit amet."
    >
      <ProductsList
        products={products}
        itemTemplate={(product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClickFav={() => {}}
          />
        )}
      />
    </GenericPage>
  );
};

export default MyFavoritesPage;
