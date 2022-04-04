import { Fragment } from "react";
import { CategoryPreview } from "../../components";
import { useSelector } from "react-redux";
import { selectCategoryMap } from "../../store";

export const CategoriesPreviewRoute = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};
