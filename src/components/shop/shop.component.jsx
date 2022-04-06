import "./shop.styles.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreviewRoute, CategoryRoute } from "../../routes";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

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
