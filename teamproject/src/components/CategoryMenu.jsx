
// import React from "react"; 
// import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
// import {
//   CategoryWrapper,
//   CategoryContainer,
//   CategoryItem,
//   Circle,
//   CategoryImage,
//   CategoryText
// } from "../styles/CategoryMenuStyles"; 

// const categories = [
//   { name: "전체", image: "https://i.imgur.com/dH69YID.png" }, 
//   { name: "안심", image: "https://francegourmet.kr/web/product/tiny/29.jpg" }, 
//   { name: "등심", image: "https://cdn.imweb.me/thumbnail/20220706/0a4cc849ff82d.png" }, 
//   { name: "특수", image: "https://cdn.011st.com/11dims/resize/1000x1000/quality/75/11src/product/2644106915/B.jpg?431000000" }, 
//   { name: "간편식", image: "https://tigl.kr/data/images/sumnail/7885861705/7885861705_0.jpg" }, 
// ];

// const CategoryMenu = () => {
//   const navigate = useNavigate(); // 페이지 이동을 위한 함수

//   const handleCategoryClick = (category) => {
//     if (category === "전체") {
//       navigate("/all"); // ✅ "전체" 클릭 시 `/all` 페이지로 이동
//     } else {
//       console.log(`${category} 카테고리 클릭`);
//       // 필요하면 특정 카테고리별 필터링 기능 추가 가능
//     }
//   };

//   return (
//     <CategoryWrapper> 
//       <CategoryContainer> 
//         {categories.map((item, index) => (
//           <CategoryItem key={index} onClick={() => handleCategoryClick(item.name)}> 
//             <Circle> 
//               <CategoryImage src={item.image} alt={item.name} /> 
//             </Circle>
//             <CategoryText>{item.name}</CategoryText> 
//           </CategoryItem>
//         ))}
//       </CategoryContainer>
//     </CategoryWrapper>
//   );
// };

// export default CategoryMenu;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoryWrapper,
  CategoryContainer,
  CategoryItem,
  Circle,
  CategoryImage,
  CategoryText
} from "../styles/CategoryMenuStyles"; 

const categories = [
  { name: "전체", image: "https://i.imgur.com/dH69YID.png" }, 
  { name: "안심", image: "https://francegourmet.kr/web/product/tiny/29.jpg" }, 
  { name: "등심", image: "https://cdn.imweb.me/thumbnail/20220706/0a4cc849ff82d.png" }, 
  { name: "특수", image: "https://cdn.011st.com/11dims/resize/1000x1000/quality/75/11src/product/2644106915/B.jpg?431000000" }, 
  { name: "간편식", image: "https://tigl.kr/data/images/sumnail/7885861705/7885861705_0.jpg" }, 
];

const CategoryMenu = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === "전체") {
      navigate("/all");
    } else {
      navigate(`/all?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <CategoryWrapper> 
      <CategoryContainer> 
        {categories.map((item, index) => (
          <CategoryItem key={index} onClick={() => handleCategoryClick(item.name)}> 
            <Circle> 
              <CategoryImage src={item.image} alt={item.name} /> 
            </Circle>
            <CategoryText>{item.name}</CategoryText> 
          </CategoryItem>
        ))}
      </CategoryContainer>
    </CategoryWrapper>
  );
};

export default CategoryMenu;

