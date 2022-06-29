import GenericPage from "@/components/generic-page/generic-page";
import ProductCard from "@/components/product-card/product-card";
import { ProductsList } from "@/components/products-list/products-list";
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts";
import { useProducts } from "@/lib/hooks/useProducts";
import type { NextPage } from "next";

export const MyFavoritesPage: NextPage = () => {
  const { products: fetchedProducts } = useProducts();
  const [favorites, toggleFavorite] = useFavoriteProducts();

  const products = fetchedProducts
    .filter(({ productSku }) => favorites.includes(productSku))
    .map((product) => ({ ...product, fav: true }));

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
            onClickFav={toggleFavorite}
          />
        )}
      />
    </GenericPage>
  );
};

export default MyFavoritesPage;
