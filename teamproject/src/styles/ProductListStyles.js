import styled from "styled-components";

/* 🏷️ 상품 리스트 컨테이너 (가로 스크롤 가능) */
export const ProductContainer = styled.div`
  display: flex; /* 상품들을 가로로 정렬 */
  justify-content: center; /* 가운데 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  flex-wrap: wrap; /* 반응형: 작은 화면에서 줄 바꿈 허용 */
  gap: 16px; /* 아이템 간 간격 */
  padding: 16px; /* 내부 여백 */
  width: 100%; /* 부모 요소를 가득 채움 */
  max-width: 1200px; /* 최대 너비 제한 (배너 크기와 동일하게 유지) */
  overflow-x: auto; /* 작은 화면에서는 가로 스크롤 가능 */

  /* 🏷️ 가로 스크롤 숨김 */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바를 숨겨서 깔끔한 UI 유지 */
  }
`;

/* 🏷️ 개별 상품 아이템 */
export const ProductItem = styled.div`
  flex: 1 1 calc(20% - 16px); /* 기본적으로 한 줄에 5개씩 배치 */
  max-width: 200px; /* 최대 너비 지정 */
  min-width: 120px; /* 최소 너비 지정 */
  height: 150px; /* 고정 높이 설정 */
  border-radius: 8px; /* 모서리를 둥글게 */
  background-color: #f5f5f5; /* 배경색 (연한 회색) */
  display: flex; /* 내부 요소 정렬을 위한 flex 사용 */
  justify-content: center; /* 이미지 가운데 정렬 */
  align-items: center; /* 이미지 수직 가운데 정렬 */

  img {
    width: 100%; /* 부모 요소를 가득 채우도록 설정 */
    height: 100%; /* 부모 요소를 가득 채우도록 설정 */
    object-fit: cover; /* 이미지 비율을 유지하면서 요소를 채우도록 설정 */
    border-radius: 8px; /* 이미지 모서리도 둥글게 */
  }

  /* 🏷️ 반응형 설정 */
  @media (max-width: 1024px) {
    flex: 1 1 calc(33.33% - 16px); /* 화면이 작아지면 한 줄에 3개씩 배치 */
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 16px); /* 태블릿 크기에서는 한 줄에 2개씩 배치 */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* 모바일에서는 한 줄에 1개씩 배치 */
  }
`;
