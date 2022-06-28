import { useState } from "react";

const initializeCategories = () => {
  return [
    "Estancias",
    "Estil",
    "Muebles",
    "Decoración",
    "We are Kave",
    "Proyectos",
  ];
};

export const useCategories = () => {
  const [categories] = useState(initializeCategories);
  return [categories];
};
