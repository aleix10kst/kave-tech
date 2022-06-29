import { Product } from "@/lib/types/product.type";
import { Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PRODUCTS_ROUTE } from "@/lib/constants/routes";

export interface SearcherProps {
  products: Product[];
}

const Searcher = ({ products }: SearcherProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filteredProducts =
    query && query.length >= 2
      ? products.filter((product) =>
          product.productName.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <Combobox
      value={null}
      onChange={(product: Product) => {
        router.push({
          pathname: `${PRODUCTS_ROUTE}/[id]`,
          query: { id: product.productSku },
        });
        setQuery("");
      }}
    >
      <div className="relative w-full lg:w-[355px]">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none sm:text-sm">
          <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon className="h-5 w-5 text-[#4A4A4A]" aria-hidden="true" />
          </Combobox.Button>
          <Combobox.Input
            className="w-full border-none bg-[#F5F5F5] py-2 pr-3 pl-10 text-sm leading-5 text-[#9B9B9B] focus:ring-0"
            placeholder="Buscar productos"
            displayValue={(product: Product) => product?.productName}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-5 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm lg:w-[784px]">
            {query && filteredProducts.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                {`No se han encontrado productos`}
              </div>
            ) : (
              filteredProducts.map((product) => (
                <Combobox.Option
                  key={product.productSku}
                  value={product}
                  className={`relative flex cursor-pointer `}
                >
                  {({ active }) => (
                    <div
                      className={`relative flex w-full items-center space-x-3 py-2 px-[26px] ${
                        active ? "bg-gray-800/5" : "bg-white"
                      }`}
                    >
                      <Image
                        src={product.productImageUrl}
                        alt={product.productName}
                        height={37}
                        width={37}
                      />
                      <span className="font-[Poppins] text-lg text-[#4A4A4A]">
                        {product.productName}
                      </span>
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Searcher;
