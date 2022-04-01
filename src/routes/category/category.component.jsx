import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts";
import { useContext, useState, useEffect, Fragment } from "react";
import { ProductCard } from "../../components/product-card";
export const CategoryRoute = () => {
  /**
   * to get the route param value from the route placeholder
   */
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </Fragment>
  );
};
