import styled from "styled-components";

/* 🏷️ 전체 페이지 컨테이너 (세로 정렬) */
export const PageContainer = styled.div`
  display: flex; /* 플렉스 레이아웃 적용 */
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 중앙 정렬 */
`;

/* 🏷️ 중앙 정렬된 콘텐츠 래퍼 (배너 크기 기준) */
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가운데 정렬 */
`;
