import { Fragment } from "react";
import { CategoryPreview, Spinner } from "../../components";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoryMap } from "../../store";

export const CategoriesPreviewRoute = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return isLoading ? (
    <Spinner />
  ) : (
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
