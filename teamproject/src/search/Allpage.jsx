import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductWrapper, ProductContainer, ProductItem, DetailButton, ImageWrapper, ProductImage } from "../styles/ProductListStyles";
import { AllpageWrapper, AllButton, FilterContainer, CheckboxGroup, CustomCheckbox, H2 } from "../styles/AllpageStyles";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { HeaderWrapper } from "../header/HeaderStyle";
import Footer from "../components/Footer";
import { FooterWrapper } from "../styles/FooterStyles";

const categoryColors = {
  "전체": "#FF0000",  // ✅ 빨강 (항상 적용)
  "안심": "#FF7F50",  // 주황
  "등심": "#FFD700",  // 노랑
  "특수": "#32CD32",  // 초록
  "간편식": "#1E90FF", // 파랑
};

const usageColors = {
  "구이용": "#00008B",  // ✅ 남색
  "요리용": "#8A2BE2",  // ✅ 보라
};

const AllPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedUsages, setSelectedUsages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/gogiInfo")
      .then((response) => response.data)
      .then((data) => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch((error) => console.error("데이터 로딩 실패:", error));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoriesFromUrl = params.getAll("category");
    const usagesFromUrl = params.getAll("usage");

    setSelectedCategories(categoriesFromUrl);
    setSelectedUsages(usagesFromUrl);

    let filtered = products;

    if (categoriesFromUrl.length > 0) {
      filtered = filtered.filter((product) => categoriesFromUrl.includes(product.part));
    }

    if (usagesFromUrl.length > 0) {
      filtered = filtered.filter((product) => usagesFromUrl.includes(product.usage));
    }

    setFilteredProducts(filtered);
  }, [location.search, products]);

  // "체크해제" 체크 시 모든 카테고리 해제
  const handleCategoryFilter = (category) => {
    const params = new URLSearchParams(location.search);
    let newSelectedCategories = [...selectedCategories];


    if (newSelectedCategories.includes(category)) {
      newSelectedCategories = newSelectedCategories.filter((item) => item !== category);
    } else {
      newSelectedCategories.push(category);
    }

    setSelectedCategories(newSelectedCategories);
    params.delete("category");
    newSelectedCategories.forEach((item) => params.append("category", item));
    navigate(`/all?${params.toString()}`);
  };

  // "구이용", "요리용" 필터 적용
  const handleUsageFilter = (usage) => {
    const params = new URLSearchParams(location.search);
    let newSelectedUsages = [...selectedUsages];


    if (newSelectedUsages.includes(usage)) {
      newSelectedUsages = newSelectedUsages.filter((item) => item !== usage);
    } else {
      newSelectedUsages.push(usage);
    }


    setSelectedUsages(newSelectedUsages);
    params.delete("usage");
    newSelectedUsages.forEach((item) => params.append("usage", item));
    navigate(`/all?${params.toString()}`);
  };

  return (
    <AllpageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ProductWrapper>
        <H2>상품 목록</H2>

        {/* ✅ 전체 버튼 + 체크박스 그룹을 중앙 정렬 */}
        <FilterContainer>
          {/* ✅ "전체 상품" 버튼 (검은색) */}
          <AllButton onClick={() => navigate("/all")}>
            전체 상품
          </AllButton>

          {/* ✅ 1차 필터 (부위 체크박스) */}
          <CheckboxGroup>
            {["안심", "등심", "특수", "간편식"].map((category) => (
              <CustomCheckbox
                key={category}
                checked={selectedCategories.includes(category)}
                color={categoryColors[category]} /* ✅ 색상 적용 */
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryFilter(category)}
                />
                {category}
              </CustomCheckbox>
            ))}
          </CheckboxGroup>

          {/* ✅ 2차 필터 (사용 용도 체크박스) */}
          <CheckboxGroup>
            {["구이용", "요리용"].map((usage) => (
              <CustomCheckbox
                key={usage}
                checked={selectedUsages.includes(usage)}
                color={usageColors[usage]} /* ✅ 색상 적용 */
              >
                <input
                  type="checkbox"
                  checked={selectedUsages.includes(usage)}
                  onChange={() => handleUsageFilter(usage)}
                />
                {usage}
              </CustomCheckbox>
            ))}
          </CheckboxGroup>
        </FilterContainer>

        <ProductContainer>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product.id}>
                <ImageWrapper>
                  <ProductImage src={product.images[0]?.url || "https://placehold.co/150x220?text=No+Image"} alt={product.name} />
                  <Link to={`/detail/${product.id}`}>
                    <DetailButton>상세보기</DetailButton>
                  </Link>
                </ImageWrapper>
                <strong>{product.name}</strong>
              </ProductItem>
            ))
          ) : (
            <p>해당 조건에 맞는 상품이 없습니다.</p>
          )}
        </ProductContainer>
      </ProductWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AllpageWrapper>
  );
};

export default AllPage;
