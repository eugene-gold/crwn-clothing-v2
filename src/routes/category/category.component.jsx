import { Container, Title } from "./category.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/cetegory.selector";
import { Spinner } from "../../components/spinner/spinner.component";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Container>
      )}
    </>
  );
};
