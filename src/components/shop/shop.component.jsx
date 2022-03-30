import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../contexts";
import { ProductCard } from "../product-card";

export const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};
