import React from "react";
import { ProductContainer, ProductItem } from "../styles/ProductListStyles";
import { ContentWrapper } from "../styles/commonStyles";

// 🏷️ 상품 데이터 (예제 이미지)
const products = [
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150", // 7번째 상품 (숨겨짐)
  "https://placehold.co/150x150", // 8번째 상품 (숨겨짐)
];

// 🏷️ 상품 리스트 컴포넌트
const ProductList = () => {
  return (
    <ContentWrapper>
      <ProductContainer>
        {products.slice(0, 6).map((img, index) => ( // 상위 6개만 표시
          <ProductItem key={index}>
            <img src={img} alt={`상품 ${index + 1}`} />
          </ProductItem>
        ))}
      </ProductContainer>
    </ContentWrapper>
  );
};

export default ProductList;
