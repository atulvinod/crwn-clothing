import { createContext, useEffect, useState } from "react";
import { getShopCategories } from "../services";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    getShopCategories().then((value) => {
      setCategories(value);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
