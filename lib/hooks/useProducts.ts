import { useState } from "react";
import useSWR from "swr";
import { PRODUCTS_API } from "../constants/api-route";
import { ApiResponse, Product } from "../types/product.type";
import { fetcher } from "../utils/fetcher";

export const useProducts = () => {
  const { data, error } = useSWR<ApiResponse>(PRODUCTS_API, fetcher);
  return { products: data?.results ?? [], error, loading: !data && !error };
};
