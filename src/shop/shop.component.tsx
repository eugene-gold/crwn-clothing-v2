import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../routes/categories-preview/categories-preview.component";
import { Category } from "../routes/category/category.component";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../store/categories/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
