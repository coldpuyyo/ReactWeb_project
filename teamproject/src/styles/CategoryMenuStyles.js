import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px; /* 간격 줄이기 */
  padding: 16px;
  width: 100%;
  max-width: 1050px;
  margin-top: 60px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden; /* 이미지가 원형 틀을 벗어나지 않도록 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryText = styled.span`
  margin-top: 6px;
  font-size: 12px; /* 글자 크기 조정 */
  color: #333;
`;
