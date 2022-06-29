import ProductCard from "@/components/product-card/product-card";
import { ProductsList } from "@/components/products-list/products-list";
import { LANDING_ROUTE } from "@/lib/constants/routes";
import { useCategories } from "@/lib/hooks/useCategories";
import { useProducts } from "@/lib/hooks/useProducts";
import { Product } from "@/lib/types/product.type";
import { NextPage } from "next";
import Link from "next/link";
import homeBanner from "../public/banner_home.png";
import Image from "next/image";
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts";

const CategoriesSection = ({ categories }: { categories: string[] }) => {
  return (
    <section className="flex flex-col items-center px-5 py-6 lg:px-[68px] lg:py-10">
      <h2 className="mb-5 font-[NotoSerif] text-[26px]">Inspírate</h2>
      <div className="mb-[30px] flex flex-wrap justify-center gap-3 lg:gap-4">
        {categories.map((category, idx) => (
          <Link key={idx} href={LANDING_ROUTE}>
            <a className="bg-[#F5F5F5] p-2 text-sm underline">{category}</a>
          </Link>
        ))}
      </div>
      <div className="flex w-full snap-x gap-x-6 overflow-x-auto pb-2 lg:justify-center">
        {categories.map((category, idx) => (
          <div key={idx} className="snap-center text-center">
            <div className="mb-[14px] h-[149px] w-[197px] bg-[#F5F5F5]" />
            <Link href={"/"}>
              <a className=" text-sm underline">{category}</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  const [, toggleFavorite] = useFavoriteProducts();
  return (
    <section className="flex flex-col px-5 py-16 md:px-14 lg:py-48 lg:pl-[123px] lg:pr-[112px]">
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
      <Link href={"/productes"}>
        <a className="text-[Poppins] mx-auto border border-black py-5 px-9 text-lg hover:bg-gray-100">
          Ver todos los productos
        </a>
      </Link>
    </section>
  );
};

const Home: NextPage = () => {
  const [categories] = useCategories();
  const { products: fetchedProducts = [] } = useProducts();

  const products = fetchedProducts.slice(0, 9);

  return (
    <div className="">
      <div className="relative h-[578px] lg:h-[924px]">
        <Image src={homeBanner} alt="Kave home" layout="fill" />
        <p className="absolute bottom-7 left-4 font-[Poppins] text-[26px] font-bold text-white lg:left-16 lg:bottom-56 lg:text-[56px]">
          Cuando la realidad supera la ficción.{" "}
          <br className="hidden lg:block" /> Trucos para estar en casa.
        </p>
      </div>
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </div>
  );
};

export default Home;
