import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreviewRoute, CategoryRoute } from "../../routes";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewRoute />} />
      {/**
       * match the route params, :placeholder
       */}
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};
