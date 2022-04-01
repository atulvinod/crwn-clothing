import { createContext, useEffect, useState } from "react";

import  SHOP_DATA  from "../services/shop/shop-data.js";
import { addCollectionAndDocuments } from "../services";

export const ProductContext = createContext({
  products: [],
});


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  useEffect(() =>{
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, [])
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
