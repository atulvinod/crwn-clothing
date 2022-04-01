import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts";
import { useContext, useState, useEffect, Fragment } from "react";
import { ProductCard } from "../../components";
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
        {
          /**
           * A safeguard is required in case our data is being fetched from the server 
           * but our component needs that data to render, hence we can show loader or 
           * we can shot circuit the value 
           */
        }
        {products &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </Fragment>
  );
};
