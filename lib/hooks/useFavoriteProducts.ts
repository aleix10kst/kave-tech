import { useLocalStorage } from "./useLocalStorage";

export const useFavoriteProducts = (): [
  string[],
  (productSku: string) => void
] => {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const toggleFavorite = (productSku: string) => {
    const alreadyFavedProduct = favorites.includes(productSku);
    if (!alreadyFavedProduct) {
      setFavorites((previous) => [...previous, productSku]);
    } else {
      setFavorites((previous) =>
        previous.filter((product) => product !== productSku)
      );
    }
  };

  return [favorites, toggleFavorite];
};
