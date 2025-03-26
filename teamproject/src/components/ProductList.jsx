import React, { useState, useEffect } from "react";
import { ProductWrapper, ProductContainer, ProductItem, DetailButton, ImageWrapper, ProductImage } from "../styles/ProductListStyles";
import axios from "axios";
import { Link } from "react-router-dom"; // React Router에서 Link 가져오기

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/gogiInfo") // 실제 API URL 입력
      .then((response) => response.data)
      .then((data) => {
        console.log("API 데이터:", data); // 데이터가 정상적으로 불러와지는지 확인
        if (data && data.length > 0) {
          setProducts(data.slice(0, 6)); // 최대 6개까지만 가져오기
        } else {
          console.error("API 응답에 gogiInfo가 없음.");
        }
      })
      .catch((error) => console.error("데이터 로딩 실패:", error));
  }, []);

  return (
    <ProductWrapper>
      <ProductContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id}>
              <ImageWrapper>
                {product.images && product.images.length > 0 ? (
                  <ProductImage src={product.images[0].url} alt={`상품 ${product.id}`} />
                ) : (
                  <ProductImage src="https://placehold.co/150x220?text=No+Image" alt="기본 이미지" />
                )}
                <Link to={`/detail/${product.id}`}>
                  <DetailButton>상세보기</DetailButton>
                </Link>
              </ImageWrapper>
              <strong>{product.name}</strong>
            </ProductItem>
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </ProductContainer>
    </ProductWrapper>
  );
};

export default ProductList;
