import { useState } from "react";
import { Product } from "../types/product.type";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  return [products];
};
