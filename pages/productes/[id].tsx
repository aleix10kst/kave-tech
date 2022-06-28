import { Product } from "@/lib/types/product.type";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { fetcher } from "@/lib/utils/fetcher";
import { PRODUCTS_API } from "@/lib/constants/api-route";

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({
  product,
}) => {
  const productCollectionName = product.productCollection
    .slice(0, 1)
    .toUpperCase()
    .concat(product.productCollection.slice(1));
  const isFavorite = true;
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative h-[600px] lg:h-screen lg:w-3/5">
        <Image
          src={product.productImageUrl}
          layout="fill"
          alt={product.productName}
        />
        <button
          className="absolute top-11 right-8"
          onClick={() => {}}
        >
          {isFavorite ? (
            <SolidHeartIcon className="h-7 w-7 text-[#E02020]" />
          ) : (
            <OutlineHeartIcon className={`h-7 w-7`} />
          )}
        </button>
      </div>
      <div className="p-8">
        <h1 className="mb-1 font-[Poppins] text-4xl font-[500]">
          {productCollectionName}
        </h1>
        <h2 className="mb-7 font-[Poppins] text-sm text-[#828280]">
          {product.productCategoryHierarchy}
        </h2>
        <p className="mb-2 font-[Poppins] text-2xl font-[500]">
          {product.productPrice}
          <span className="align-top font-[Poppins] text-sm">€</span>
        </p>
        <p className="font-[Poppins] text-base">{product.productName}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { results: products } = await fetcher<{ results: Product[] }>(
    PRODUCTS_API
  );
  const product = products.find(({ productSku }) => productSku === query.id);
  return { props: { product } };
};

export default ProductDetailPage;
