import "./category-preview.styles.scss";

import { ProductCard } from "../product-card";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={`/shop/${title}`}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index, array) => index < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </div>
    </div>
  );
};
