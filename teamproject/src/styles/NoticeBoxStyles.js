import styled from "styled-components";

/* 🏷️ 공지사항 박스 컨테이너 */
export const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6; /* 배경색 (연한 회색) */
  padding: 12px 16px;
  border-radius: 8px;
  max-width: 600px;
  margin: 10px auto; /* 가운데 정렬 */
`;

/* 🏷️ 아이콘 스타일 */
export const NoticeIcon = styled.span`
  color: #ff7f50; /* 오렌지 색상 */
  font-size: 18px;
  margin-right: 10px;
`;

/* 🏷️ 텍스트 스타일 */
export const NoticeText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;
