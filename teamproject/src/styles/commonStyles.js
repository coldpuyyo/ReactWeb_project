import styled from "styled-components";

/* 🏷️ 유연한 가로 정렬 컨테이너 */
export const FlexContainer = styled.div`
  display: flex; /* 가로 정렬 */
  justify-content: space-between; /* 요소 간 간격 최대 배치 */
  align-items: center; /* 세로 중앙 정렬 */
`;

/* 🏷️ 박스 그림자 효과 */
export const BoxShadow = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 효과 */
`;

/* 🏷️ 3열(3칸) 그리드 레이아웃 */
export const GridContainer = styled.section`
  display: grid; /* 그리드 레이아웃 적용 */
  grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 너비의 열 */
  gap: 16px; /* 요소 간 간격 16px */
  padding: 16px; /* 내부 여백 16px */
`;

/* 🏷️ 버튼 스타일 */
export const Button = styled.button`
  font-size: 14px; /* 폰트 크기 */
  padding: 6px 12px; /* 내부 패딩 */
  border-radius: 4px; /* 버튼 모서리 둥글게 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
`;

/* 🏷️ 전체 페이지 컨테이너 (세로 정렬) */
export const PageContainer = styled.div`
  display: flex; /* 플렉스 레이아웃 적용 */
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 중앙 정렬 */
  width: 100%; /* 전체 너비 사용 */
`;

/* 🏷️ 중앙 정렬된 콘텐츠 래퍼 (배너 크기 기준) */
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* 배너 크기 기준 */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가운데 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
`;
