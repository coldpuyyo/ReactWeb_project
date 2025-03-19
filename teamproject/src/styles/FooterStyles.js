import styled from "styled-components";

/* 🏷️ 푸터 전체 컨테이너 */
export const FooterContainer = styled.footer`
  background-color: #fff; /* 배경색: 흰색 */
  padding: 20px 0; /* 상하 패딩 20px */
  text-align: center; /* 텍스트 중앙 정렬 */
  font-size: 13px; /* 기본 폰트 크기 */
  color: #666; /* 글자색: 연한 회색 */
  border-top: 1px solid #ddd; /* 상단 테두리 추가 */
`;

/* 🏷️ 푸터 내부 콘텐츠 영역 (최대 너비 설정) */
export const FooterContent = styled.div`
  width: 1000px; /* 최대 너비 1100px */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 0 20px; /* 좌우 패딩 추가 */
`;

/* 🏷️ 푸터 내 링크 목록 */
export const FooterLinks = styled.div`
  display: flex; /* 가로 정렬 */
  justify-content: center; /* 가운데 정렬 */
  gap: 15px; /* 항목 간격 15px */
  margin-bottom: 10px; /* 하단 여백 추가 */
  font-weight: bold; /* 텍스트 볼드 처리 */

  a {
    color: #333; /* 링크 색상: 진한 회색 */
    text-decoration: none; /* 밑줄 제거 */
  }
`;

/* 🏷️ 푸터 하단 정보 (저작권 및 회사 정보) */
export const FooterInfo = styled.div`
  font-size: 12px; /* 글자 크기 축소 */
  color: #666; /* 연한 회색 */

  a {
    color: #333; /* 링크 색상 */
    font-weight: bold; /* 볼드 처리 */
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-row: 7;
  grid-column: 2/6;
`;