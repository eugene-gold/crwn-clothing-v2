import { ProductCard } from "../product-card/product-card.component";

import { Preview, PreviewContainer, Title } from "./category-preview.styles";
import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  products: CategoryItem[];
  title: string;
};

export const CategoryPreview: FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <PreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};
