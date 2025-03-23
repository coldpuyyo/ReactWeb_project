import React from "react"; // React 라이브러리 불러오기
import {
  CategoryContainer,
  CategoryItem,
  Circle,
  CategoryImage,
  CategoryText
} from "../styles/CategoryMenuStyles"; // 스타일 파일에서 필요한 요소 불러오기
import { ContentWrapper } from "../styles/commonStyles"; // 공통 스타일 불러오기

// 🏷️ 카테고리 데이터 배열
const categories = [
  { name: "전체", image: "https://i.imgur.com/dH69YID.png" }, // 첫 번째 카테고리
  { name: "안심", image: "https://francegourmet.kr/web/product/tiny/29.jpg" }, // 두 번째 카테고리
  { name: "등심", image: "https://cdn.imweb.me/thumbnail/20220706/0a4cc849ff82d.png" }, // 세 번째 카테고리
  { name: "특수", image: "https://cdn.011st.com/11dims/resize/1000x1000/quality/75/11src/product/2644106915/B.jpg?431000000" }, // 네 번째 카테고리
  { name: "간편식", image: "https://tigl.kr/data/images/sumnail/7885861705/7885861705_0.jpg" }, // 다섯 번째 카테고리
];

// 🏷️ 카테고리 메뉴 컴포넌트
const CategoryMenu = () => {
  return (
    <ContentWrapper> {/* 전체 컨텐츠를 감싸는 래퍼 */}
      <CategoryContainer> {/* 카테고리 목록을 담는 컨테이너 */}
        {/* 카테고리 항목 반복 렌더링 */}
        {categories.map((item, index) => (
          <CategoryItem key={index}> {/* 각 카테고리 아이템 */}
            <Circle> {/* 원형 틀 */}
              <CategoryImage src={item.image} alt={item.name} /> {/* 카테고리 이미지 */}
            </Circle>
            <CategoryText>{item.name}</CategoryText> {/* 카테고리 텍스트 */}
          </CategoryItem>
        ))}
      </CategoryContainer>
    </ContentWrapper>
  );
};

export default CategoryMenu; // 🏷️ 카테고리 메뉴 컴포넌트 내보내기
