import Image from "next/image";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { Product } from "@/lib/types/product.type";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/lib/constants/routes";
import { MouseEvent } from "react";

export interface ProductCardProps {
  product: Product;
  onClickFav: (productSku: string) => void;
}

const ProductCard = ({ product, onClickFav }: ProductCardProps) => {
  const favButtonClicked = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickFav(product.productSku);
  };

  return (
    <Link
      href={{
        pathname: `${PRODUCTS_ROUTE}/[id]`,
        query: { id: product.productSku },
      }}
    >
      <a className="relative">
        <div className="relative mb-5 h-[267px]">
          <Image
            src={product.productImageUrl as string}
            alt={product.productName}
            layout="fill"
          />
          <button
            className="absolute right-[18px] top-[18px] lg:right-[22px] lg:top-5"
            onClick={favButtonClicked}
          >
            {product.fav ? (
              <SolidHeartIcon className="h-7 w-7 text-[#E02020]" />
            ) : (
              <OutlineHeartIcon className={`h-7 w-7`} />
            )}
          </button>
        </div>

        <p className="mb-1 font-[Poppins] text-lg font-bold">
          {product.productName}
        </p>
        <p className="font-[Poppins] text-lg">{product.productPrice}€</p>
      </a>
    </Link>
  );
};

export default ProductCard;
