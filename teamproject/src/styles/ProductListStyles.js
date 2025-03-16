import styled from "styled-components";

/* 🏷️ 상품 리스트 컨테이너 */
export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개씩 */
  gap: 16px;
  padding: 16px;
  width: 100%;
  max-width: 900px; /* 배너 크기와 동일하게 유지 */
  margin: 0 auto; /* 가운데 정렬 */

  /* 2줄까지만 표시 */
  max-height: 350px; /* 적절한 높이 설정 */
  overflow: hidden;

  /* 🏷️ 반응형 설정 */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 태블릿에서는 2개씩 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 모바일에서는 1개씩 */
  }
`;

/* 🏷️ 개별 상품 아이템 */
export const ProductItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
