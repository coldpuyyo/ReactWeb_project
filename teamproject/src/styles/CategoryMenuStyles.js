import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가운데 정렬 */
  border-radius: 8px;
  background-color:rgb(252, 249, 233);
  box-shadow: 1px 1px 2px 2px #555555
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* 간격 줄이기 */
  padding: 20px;
  
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden; /* 이미지가 원형 틀을 벗어나지 않도록 */
  border: 2px solid #ddd;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CategoryText = styled.span`
  margin-top: 6px;
  font-size: 15px; /* 글자 크기 조정 */
  color: #333;
`;

