import Image from "next/image";
import logo from "../../public/logo.png";
import { LANDING_ROUTE, MY_FAVORITES_ROUTE } from "@/lib/constants/routes";
import { useProducts } from "@/lib/hooks/useProducts";
import { HeartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Searcher from "./searcher/searcher";

const Header = () => {
  const { products } = useProducts();
  return (
    <header className="border-b-[#9B9B9B] lg:border-b">
      <div className="hidden w-full py-3  pl-3 pr-4 md:py-4 md:pl-[30px] md:pr-8 lg:flex">
        <Link href={LANDING_ROUTE}>
          <a className="mr-10">
            <Image src={logo} alt="Kave Home®" className="" />
          </a>
        </Link>
        <Searcher products={products} />
        <Link href={MY_FAVORITES_ROUTE}>
          <a className="ml-auto">
            <HeartIcon className="h-8 w-8 text-black" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col divide-y lg:hidden">
        <div className="flex justify-between py-3 pr-[18px] pl-[12px]">
          <Link href={LANDING_ROUTE}>
            <a className="mr-10">
              <Image src={logo} alt="Kave Home®" className="" />
            </a>
          </Link>
          <Link href={MY_FAVORITES_ROUTE}>
            <a className="ml-auto">
              <HeartIcon className="h-8 w-8 text-black" />
            </a>
          </Link>
        </div>
        <div className="py-3 px-3">
          <Searcher products={products} />
        </div>
      </div>
    </header>
  );
};

export default Header;
