import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../routes/categories-preview/categories-preview.component";
import { Category } from "../routes/category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCategories } from "../store/categories/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  });

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
